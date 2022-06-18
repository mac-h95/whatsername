const stripe = require('stripe')(process.env('STRIPE_SK'));
const commerce = new Commerce('');

const card = elements.create('card');

// ... Integrate Elements onto your page, and other fields required for capturing a checkout with Commerce.js.

// Create a function that can be called when a "complete order" button is clicked
async function captureOrder() {
  // This process includes a few API calls, so now is a good time to show a loading indicator

  // Create a payment method using the card element on the page
  const paymentMethodResponse = await stripe.createPaymentMethod({
    type: 'card',
    card
  });

  if (paymentMethodResponse.error) {
    // There was some issue with the information that the customer entered into the payment details form.
    alert(paymentMethodResponse.error.message);
    return;
  }

  try {
    // Use a checkout token ID generated that was generated earlier, and any order details that may have been collected
    // on this page. Note that Commerce.js checkout tokens may already have all the information saved against them to
    // capture an order, so this extra detail may be optional.
    const order = await commerce.checkout.capture(checkoutTokenId, {
      ...orderDetails,
      // Include Stripe payment method ID:
      payment: {
        gateway: 'stripe',
        stripe: {
          payment_method_id: paymentMethodResponse.paymentMethod.id
        }
      }
    });

    // If we get here, the order has been successfully captured and the order detail is part of the `order` variable
    console.log(order);
    return;
  } catch (response) {
    // There was an issue with capturing the order with Commerce.js
    console.log(response);
    alert(response.message);
    return;
  } finally {
    // Any loading state can be removed here.
  }
}
