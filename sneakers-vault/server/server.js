const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const createCheckoutSession = require('./routes/create-checkout-session');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Route per Stripe Checkout
app.use('/api/create-checkout-session', createCheckoutSession);

// Porta del server
const PORT = process.env.PORT || 4242;
app.listen(PORT, () => {
  console.log(`✅ Backend Stripe attivo su http://localhost:${PORT}`);
});
