// This example sets up an endpoint using the Express framework.
// To learn more about Express, watch this video: https://youtu.be/rPR2aJ6XnAc.
const express = require('express');
const app = express();
const cors = require('cors');

const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:8000',
  'https://food-delivery-application-rtu9.onrender.com',
  'https://kshitij-fudo-app.onrender.com',
];

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  optionsSuccessStatus: 204,
  credentials: true, // Allow credentials like cookies
};
app.use(cors(corsOptions));
const stripe = require('stripe')(
  'sk_test_51OsjhaSF6WDxp41UaLRiFCjm8Q5SkRkFeHFLu3y3i8dP41rq3TeC2lTxJJuG9QiocWwP2dTPA7htd7hnfeL03djx00qGaCbuXR'
);
app.get('/', (req, res) => {
  res.send('SUCCESSFULL');
});
app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'T-shirt',
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    ui_mode: 'embedded',
    return_url: 'http://localhost:5000',
  });

  res.send({ clientSecret: session.client_secret });
});

app.listen(5000, () => console.log(`Listening on port ${5000}!`));

/* const express = require('express');
const app = express();
const cors = require('cors');

const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:8000',
  'https://food-delivery-application-rtu9.onrender.com',
  'https://kshitij-fudo-app.onrender.com',
];

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  optionsSuccessStatus: 204,
  credentials: true, // Allow credentials like cookies
};
app.use(cors(corsOptions));

const stripe = require('stripe')(
  'sk_test_51OsjhaSF6WDxp41UaLRiFCjm8Q5SkRkFeHFLu3y3i8dP41rq3TeC2lTxJJuG9QiocWwP2dTPA7htd7hnfeL03djx00qGaCbuXR' // Replace with your Stripe secret key
);

app.get('/', (req, res) => {
  res.send('SUCCESSFUL');
});

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: 'inr',
          product_data: {
            name: 'T-shirt',
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    ui_mode: 'embedded',
    billing_address_collection: 'required',
    return_url: 'http://localhost:5000',
  });

  res.send({ clientSecret: session.client_secret });
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
 */
/*  */
