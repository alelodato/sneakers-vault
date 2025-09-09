import { loadStripe } from "@stripe/stripe-js";

let stripePromise;
export default function getStripe() {
  if (!stripePromise) {
    stripePromise = loadStripe(import.meta.env.VITE_PUBLIC_STRIPE_PUBLISHABLE_KEY);
  }
  return stripePromise;
}
