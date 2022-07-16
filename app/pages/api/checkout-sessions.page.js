const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

export default async function handler(req, res) {
  const { name, description, image, quantity, price, options } = req.query

  if (req.method === 'POST') {
    try {
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price_data: {
              currency: 'gbp',
              product_data: {
                name: name,
                description: description + JSON.stringify(options),
                images: [image]
              },
              unit_amount: price + '00'
            },
            adjustable_quantity: {
              enabled: true
            },
            quantity: quantity
          }
        ],
        mode: 'payment',
        shipping_address_collection: {
          allowed_countries: ['GB']
        },
        shipping_options: [
          {
            shipping_rate_data: {
              type: 'fixed_amount',
              fixed_amount: {
                amount: 0,
                currency: 'gbp'
              },
              display_name: 'Free shipping',
              delivery_estimate: {
                minimum: {
                  unit: 'business_day',
                  value: 5
                },
                maximum: {
                  unit: 'business_day',
                  value: 7
                }
              }
            }
          },
          {
            shipping_rate_data: {
              type: 'fixed_amount',
              fixed_amount: {
                amount: 1500,
                currency: 'gbp'
              },
              display_name: '1st Class',
              delivery_estimate: {
                minimum: {
                  unit: 'business_day',
                  value: 1
                },
                maximum: {
                  unit: 'business_day',
                  value: 1
                }
              }
            }
          }
        ],
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
