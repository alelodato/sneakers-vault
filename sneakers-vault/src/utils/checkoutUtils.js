export const createCheckoutSession = async (lineItems) => {
  try {
    const res = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: lineItems }),
    });

    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    } else {
      console.error("Errore nella risposta Stripe:", data);
    }
  } catch (error) {
    console.error("Errore nel checkout:", error);
  }
};
