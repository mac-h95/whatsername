const stripe = require('stripe')(
  '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'
)

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price_data: {
              currency: 'gbp',
              product_data: {
                name: 'Test Product',
                description: 'Test Product Description',
                images: ['https://example.com/tshirt.png']
              },
              unit_amount: 1000
            },
            quantity: 5
          }
        ],
        mode: 'payment',
        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`
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
