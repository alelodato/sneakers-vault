require('dotenv').config();
const express = require('express');
const Stripe = require('stripe');

const router = express.Router();

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

router.post('/', async (req, res) => {
  const { items } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: items.map((item) => ({
        price_data: {
          currency: 'eur',
          product_data: {
            name: item.name,
          },
          unit_amount: Math.round(item.price * 100),
        },
        quantity: item.quantity,
      })),
      success_url: 'https://sneakers-vault-jet.vercel.app/success',
      cancel_url: 'https://sneakers-vault-jet.vercel.app/cancel',
    });

    res.status(200).json({ url: session.url });
  } catch (err) {
    console.error('Stripe error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
