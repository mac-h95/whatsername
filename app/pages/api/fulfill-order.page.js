const handler = async (req, res) => {
  const event = req.body

  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object
      console.log('PaymentIntent was successful!')
      res.status(200).end()
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
