const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const calculateOrderAmount = (items) => {
  return parseInt(
    items.reduce((acc, item) => acc + item.total_price, 0) + '00'
  );
};

export default async function handler(req, res) {
  const { items } = req.body;

  console.log(calculateOrderAmount(items));

  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: 'gbp',
    automatic_payment_methods: {
      enabled: true
    }
  });

  res.send({
    clientSecret: paymentIntent.client_secret
  });
}
