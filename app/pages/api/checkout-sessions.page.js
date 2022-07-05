import { urlFor } from 'sanity'

const stripe = require('stripe')(
  'sk_test_51LC0NQE61EXQFmDyGQZ2HiTVIZWGWJOvWcl1D0BfUjtNnAToJkC6132PNU0uzL6prk9zUOqSi0Jpd59UeRZXQgjZ00WJcIDrPs'
)

export default async function handler(req, res) {
  const { name, description, image, quantity, price, slug } = req.query

  if (req.method === 'POST') {
    try {
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price_data: {
              currency: 'gbp',
              product_data: {
                name: name,
                description: description,
                images: [image]
              },
              unit_amount: price + '00'
            },
            quantity: quantity
          }
        ],
        mode: 'payment',
        success_url: `${req.headers.origin}/shop/?success=true`,
        cancel_url: `${req.headers.origin}/shop/?canceled=true`
      })
      res.redirect(303, session.url)
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message)
    }
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
  }
}
