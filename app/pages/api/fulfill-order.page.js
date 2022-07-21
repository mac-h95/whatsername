const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS
  }
});

const handler = async (req, res) => {
  console.log(req.body);
  const { cart, form } = req.body;
  const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: `New order for ${form.name}`,
    text: `
      ${form.name} has ordered the following:
      ${cart
        .map(
          (product) =>
            `${product.name} - ${product.quantity} - ${product.options.map(
              (option) => `${option.name}: ${option.value}`
            )}`
        )
        .join('\n')}
    `
  };

  console.log(mailOptions);
};

export default handler;
