var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS
  }
});

export default async (req, res) => {
  console.log(req.body);
  const { name, email, message } = req.body;
  const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: 'Whatsername Contact Form',
    text: `${name} (${email}) sent the following message: ${message}`
  };
  await transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).json({ message: 'Email sent' });
    }
  });
};
