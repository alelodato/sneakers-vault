// /api/checkout.js
import Stripe from "stripe";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { items = [], deliveryFee = 0, meta = {} } = req.body;
    if (!items.length) return res.status(400).json({ error: "Empty cart" });

    const stripe = new Stripe(process.env.VITE_STRIPE_SECRET_KEY);

    // Base URL (local o deploy) dedotta dalla request
    const origin =
      req.headers.origin ||
      process.env.VITE_PUBLIC_BASE_URL ||
      "http://localhost:5173";

    // Mappa gli articoli del carrello
    const line_items = items.map((i) => ({
      quantity: i.quantity ?? 1,
      price_data: {
        currency: "eur",
        unit_amount: Math.round((i.price ?? 0) * 100),
        product_data: {
          name: i.size ? `${i.name} · Size ${i.size}` : i.name,
          images: i.image ? [i.image] : [],
        },
      },
    }));

    // Eventuale costo consegna
    if (deliveryFee > 0) {
      line_items.push({
        quantity: 1,
        price_data: {
          currency: "eur",
          unit_amount: Math.round(deliveryFee * 100),
          product_data: { name: "Delivery" },
        },
      });
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items,
      allow_promotion_codes: true,
      billing_address_collection: "required",
      // se vuoi raccogliere anche l'indirizzo di spedizione tramite Stripe:
      // shipping_address_collection: { allowed_countries: ["IT", "SM", "VA"] },

      success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/checkout/cancel`,

      metadata: {
        fullName: meta.fullName || "",
        email: meta.email || "",
        phone: meta.phone || "",
        address: meta.address || "",
        zip: meta.zip || "",
        city: meta.city || "",
        country: meta.country || "",
        deliveryDate: meta.deliveryDate || "",
        deliverySlot: meta.deliverySlot || "", // es: "09:00–12:00"
        deliveryOption: meta.deliveryOption || "standard", // standard | nextday
      },
    });

    return res.status(200).json({ id: session.id, url: session.url });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Stripe error", details: err.message });
  }
}
