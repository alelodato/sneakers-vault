// /api/checkout.js
import Stripe from "stripe";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { items = [], delivery = {}, meta = {} } = req.body; // <— aggiunto
    if (!items.length) return res.status(400).json({ error: "Empty cart" });

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || process.env.VITE_STRIPE_SECRET_KEY);
    const baseUrl = process.env.BASE_URL || process.env.VITE_PUBLIC_BASE_URL || "http://localhost:5173";

    // line items dai prodotti del carrello
    const line_items = items.map((i) => ({
      quantity: i.quantity,
      price_data: {
        currency: "eur",
        unit_amount: Math.round(i.price * 100),
        product_data: {
          name: i.size ? `${i.name} · Size: ${typeof i.size === "string" ? i.size : i.size.code}` : i.name,
          images: i.image ? [i.image] : [],
        },
      },
    }));

    // linea extra per la consegna express, se presente
    const fee = Number(delivery?.fee) || 0;
    if (fee > 0) {
      line_items.push({
        quantity: 1,
        price_data: {
          currency: "eur",
          unit_amount: Math.round(fee * 100),
          product_data: {
            name: delivery?.type === "express" ? "Delivery (Express)" : "Delivery",
          },
        },
      });
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items,
      success_url: `${baseUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/checkout/cancel`,
      allow_promotion_codes: true,
      billing_address_collection: "required",

      // Metadati utili (li ritrovi nella Sessione/Payment Intent su Stripe)
      metadata: {
        delivery_type: delivery?.type || "standard",
        delivery_fee: String(fee),
        fullName: meta.fullName || "",
        email: meta.email || "",
        address: meta.address || "",
        city: meta.city || "",
        zip: meta.zip || "",
        date: meta.date || "",
        slot: meta.slot || "",
      },
    });

    return res.status(200).json({ url: session.url });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Checkout error" });
  }
}
