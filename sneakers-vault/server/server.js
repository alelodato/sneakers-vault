import express from 'express';
import Stripe from 'stripe';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

app.use(cors());
app.use(express.json());

app.post('/api/create-checkout-session', async (req, res) => {
  const { items } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: items,
      mode: 'payment',
      success_url: 'http://localhost:5173/success',
      cancel_url: 'http://localhost:5173/cancel',
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error('Errore Stripe:', error.message);
    res.status(500).json({ error: error.message });
  }
});

app.listen(4242, () => console.log('✅ Backend Stripe attivo su http://localhost:4242'));
