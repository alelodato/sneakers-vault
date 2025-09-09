import Stripe from "stripe";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { items = [], delivery = {} } = req.body; 
    if (!items.length) return res.status(400).json({ error: "Empty cart" });

    const stripe = new Stripe(process.env.VITE_STRIPE_SECRET_KEY, { apiVersion: "2024-06-20" });
    const baseUrl = process.env.VITE_PUBLIC_BASE_URL || "http://localhost:5173";

    // ricomputo lato server (non mi fido del client)
    const DELIVERY_FEES = {
      standard: 0,           // puoi cambiarlo
      express: 990,          // €9.90 -> centesimi
    };
    const deliveryType = delivery?.type === "express" ? "express" : "standard";
    const deliveryFee = DELIVERY_FEES[deliveryType];

    // line items prodotti
    const line_items = items.map((i) => ({
      quantity: i.quantity,
      price_data: {
        currency: "eur",
        unit_amount: Math.round(i.price * 100), // i.price è già scontato lato client
        product_data: {
          name: i.size ? `${i.name} — Size ${i.size}` : i.name,
          images: i.image ? [i.image] : [],
        },
      },
    }));

    // line item consegna (se > 0)
    if (deliveryFee > 0) {
      line_items.push({
        quantity: 1,
        price_data: {
          currency: "eur",
          unit_amount: deliveryFee,
          product_data: {
            name: deliveryType === "express" ? "Express delivery" : "Standard delivery",
          },
        },
      });
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items,
      success_url: `${baseUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/checkout/cancel`,
      billing_address_collection: "required",
      shipping_address_collection: { allowed_countries: ["IT", "SM", "VA", "FR", "DE", "ES"] },
      allow_promotion_codes: true,
      metadata: {
        delivery_type: deliveryType,
        delivery_date: delivery?.date || "",
        delivery_time: delivery?.time || "",
        // opzionale: JSON address/notes
        address: delivery?.address ? JSON.stringify(delivery.address) : "",
        note: delivery?.note || "",
      },
    });

    return res.status(200).json({ id: session.id });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Stripe session error" });
  }
}
