const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS
  }
})

const handler = async (req, res) => {
  const { name, email, subject, message } = req.body
  const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: `New Message from ${name}, sent via the Whatsername Site.`,
    text: `
         Message from: ${name}, ${email}
         Subject: ${subject}
         Content below:
         ${message}
        `
  }
  transporter.sendMail(mailOptions, (err) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(200).end()
    }
  })
}

export default handler
