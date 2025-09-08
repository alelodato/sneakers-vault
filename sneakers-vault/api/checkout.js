import Stripe from "stripe";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { items } = req.body; // [{name, price, quantity, image?, size?}]
    if (!items?.length) return res.status(400).json({ error: "Empty cart" });

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const baseUrl = process.env.BASE_URL || "http://localhost:5173";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: items.map(i => ({
        quantity: i.quantity,
        price_data: {
          currency: "eur",
          unit_amount: Math.round(i.price * 100),
          product_data: {
            name: i.size ? `${i.name} — Size ${i.size}` : i.name,
            images: i.image ? [i.image] : []
          }
        }
      })),
      success_url: `${baseUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/checkout/cancel`,
      allow_promotion_codes: true,
      billing_address_collection: "required"
    });

    return res.status(200).json({ id: session.id });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: e.message });
  }
}
