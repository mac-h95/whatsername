const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS
  }
});

const handler = async (req, res) => {
  const { cart, form } = req.body;

  const orderOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: `New order for ${form.name}`,
    text: `
      ${form.name} has ordered the following:
      ${cart
        .map((product) => {
          const options = Object.entries(product.options).map(
            ([k, v]) => `${k}: ${v}`
          );
          return `${product.name} - ${product.quantity} - ${options.join(
            ', '
          )}`;
        })
        .join('\n')}
    `
  };
  console.log(orderOptions);

  const customerOptions = {
    from: process.env.EMAIL,
    to: form.email,
    subject: `Your order from Whatsername`,
    text: `
      Thank you for your order, ${form.name}!
      Your order will be delivered to you as soon as possible.
      Your order contains the following:
      ${cart
        .map(
          (product) =>
            `${product.name} - ${product.quantity} - ${JSON.stringify(
              product.options
            )}
            )}`
        )
        .join('\n')}

        Total: £${cart
          .map((product) => product.total_price)
          .reduce((a, b) => a + b, 0)}

          Shipping Address:
          ${JSON.stringify(form.address)}
    `
  };

  await transporter.sendMail(orderOptions);
  await transporter.sendMail(customerOptions);
  res.status(200).send('Success');
};

export default handler;
