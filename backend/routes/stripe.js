const express = require('express');
const router = express.Router();

const stripe = require('stripe')(
  'sk_test_51OsjhaSF6WDxp41UaLRiFCjm8Q5SkRkFeHFLu3y3i8dP41rq3TeC2lTxJJuG9QiocWwP2dTPA7htd7hnfeL03djx00qGaCbuXR'
);

router.post('/create-checkout-session', async (req, res) => {
  const { price, item } = req.body;
  console.log(req.body.price);
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Your food costs',
          },
          unit_amount: price,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    ui_mode: 'embedded',
    return_url: 'http://localhost:5173/homepage/orders',

  });
  
  res.send({msg:"success", clientSecret: session.client_secret });
});
module.exports = router;
