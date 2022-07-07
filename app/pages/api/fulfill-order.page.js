const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS
  }
})

const handler = async (req, res) => {
  const event = req.body

  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object
      const mailOptions = {
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: `New Order from Whatsername's Store`,
        text: `
          New Order from Whatsername's Store
          Name: ${paymentIntent.shipping.name}
          Email: ${paymentIntent.charges.data[0].billing_details.email}
          Address: ${paymentIntent.shipping.address.line1},
                   ${paymentIntent.shipping.address.line2}
                   ${paymentIntent.shipping.address.city},
                   ${paymentIntent.shipping.address.postal_code}
          Order URL: ${paymentIntent.charges.data[0].receipt_url}
        `
      }

      transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
          res.status(500).send(err)
        } else {
          res.status(200).end()
        }
      })
      break
    case 'payment_method.attached':
      const paymentMethod = event.data.object
      console.log('PaymentMethod was attached to a Customer!')
      break
    default:
      console.log(`Unhandled event type ${event.type}`)
      res.status(200).end()
  }
}

export default handler
