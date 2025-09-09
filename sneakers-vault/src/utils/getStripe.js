import { loadStripe } from "@stripe/stripe-js";

let stripePromise;
export default function getStripe() {
  if (!stripePromise) {
    const key = import.meta.env.VITE_PUBLIC_STRIPE_PUBLISHABLE_KEY;
    if (!key) {
        console.error("Missing VITE_PUBLIC_STRIPE_PUBLISHABLE_KEY")
        stripePromise = loadStripe(key);
    }
  }
  return stripePromise;
}
