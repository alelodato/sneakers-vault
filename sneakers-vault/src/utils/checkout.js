// es. src/checkout.js
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

export async function startCheckout(items) {
  const res = await fetch("/api/checkout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ items })
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || "Checkout error");

  const stripe = await stripePromise;
  const { error } = await stripe.redirectToCheckout({ sessionId: data.id });
  if (error) alert(error.message);
}
