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
          Email:
          Phone: ${paymentIntent.shipping.phone}
          Address: ${paymentIntent.shipping.address.line1},
                   ${paymentIntent.shipping.address.line2}
                   ${paymentIntent.shipping.address.city},
                   ${paymentIntent.shipping.address.postal_code}
          <a href='${paymentIntent.charges.receipt_url}'><button>View Order</button></a>
        `
      }

      transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
          console.log(err)
          res.status(500).send(err)
        } else {
          console.log(data)
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
