import Stripe from "stripe";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { items = [], delivery = {}, meta = {} } = req.body || {};
    if (!items.length) {
      return res.status(400).json({ error: "Empty cart" });
    }

    const secretKey = process.env.STRIPE_SECRET_KEY;
    if(!secretKey) return res.status(400).json({error:"Missing STRIPE_SECRET_KEY"});

    const stripe = new Stripe(secretKey);

    const baseUrl = process.env.BASE_URL || (requestAnimationFrame.headers.origin ? req.headers.origin : "http://localhost:5173");

    // Line items dai prodotti del carrello
    const line_items = items.map((i) => ({
      quantity: i.quantity,
      price_data: {
        currency: "eur",
        unit_amount: Math.round(i.price * 100),
        product_data: {
          name: i.size
            ? `${i.name} - Size: ${typeof i.size === "string" ? i.size : i.size.code}`
            : i.name,
          images: i.image ? [i.image] : [],
        },
      },
    }));

    // Extra per consegna express
    const fee = Number(delivery?.fee) || 0;
    if (fee > 0) {
      line_items.push({
        quantity: 1,
        price_data: {
          currency: "eur",
          unit_amount: fee * 100,
          product_data: {
            name: delivery?.type === "express" ? "Delivery (Express)" : "Delivery",
          },
        },
      });
    }

    // Creazione sessione Stripe
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items,
      success_url: `${baseUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/checkout/cancel`,
      billing_address_collection: "required",
      allow_promotion_codes: true,

      // Metadati utili
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
