import { loadStripe } from "@stripe/stripe-js";

let stripePromise;
export default function getStripe() {
  if (!stripePromise) {
    const key = import.meta.env.VITE_PUBLIC_STRIPE_PUBLISHABLE_KEY;
    if (!key) {
      console.error("Missing VITE_PUBLIC_STRIPE_PUBLISHABLE_KEY");
      return null; // evita il "match of undefined"
    }
    stripePromise = loadStripe(key);
  }
  return stripePromise;
}
