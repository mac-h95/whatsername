import {
  PaymentElement,
  useElements,
  useStripe
} from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import { useCart } from '../context';

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { form, updateForm } = useCart();

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      'payment_intent_client_secret'
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case 'succeeded':
          setMessage('Payment succeeded!');
          break;
        case 'processing':
          setMessage('Your payment is processing.');
          break;
        case 'requires_payment_method':
          setMessage('Your payment was not successful, please try again.');
          break;
        default:
          setMessage('Something went wrong.');
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/shop/payment`,
        receipt_email: form.email
      }
    });

    if (error.type === 'card_error' || error.type === 'validation_error') {
      setMessage(error.message);
    } else {
      setMessage('An unexpected error occurred.');
    }

    setIsLoading(false);
  };

  return (
    <>
      {form.shipping ? (
        <form className="flex flex-col items-center space-y-4">
          <span className="font-bold">Personal</span>
          <div className="flex items-center space-x-2">
            <div className="flex flex-col items-start w-full">
              <label for="name" className="normal-case">
                Name
              </label>
              <input
                className="checkout-input"
                name="name"
                type="text"
                value={form.name}
                onChange={(e) => updateForm({ name: e.target.value })}
                placeholder="Your name"
              />
            </div>
            <div className="flex flex-col items-start w-full">
              <label for="email" className="normal-case">
                Email Address
              </label>
              <input
                className="checkout-input"
                name="email"
                type="text"
                value={form.email}
                onChange={(e) => updateForm({ email: e.target.value })}
                placeholder="name@mail.com"
              />
            </div>
          </div>
          <span className="font-bold">Address</span>
          <div className="flex flex-col items-center space-y-2">
            <div className="flex items-start space-x-2">
              <div className="flex flex-col items-start w-full">
                <label for="line1" className="normal-case">
                  Line 1
                </label>
                <input
                  className="checkout-input"
                  name="line1"
                  type="text"
                  value={form.address.line1}
                  onChange={(e) =>
                    updateForm({
                      address: { ...form.address, line1: e.target.value }
                    })
                  }
                />
              </div>
              <div className="flex flex-col items-start w-full">
                <label for="line2" className="normal-case">
                  Line 2
                </label>
                <input
                  className="checkout-input"
                  name="line2"
                  type="text"
                  value={form.address.line2}
                  onChange={(e) =>
                    updateForm({
                      address: { ...form.address, line2: e.target.value }
                    })
                  }
                />
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="flex flex-col items-start w-full">
                <label for="city" className="normal-case">
                  City
                </label>
                <input
                  className="checkout-input"
                  name="city"
                  type="text"
                  value={form.address.city}
                  onChange={(e) =>
                    updateForm({
                      address: { ...form.address, city: e.target.value }
                    })
                  }
                />
              </div>
              <div className="flex flex-col items-start w-full">
                <label for="postcode" className="normal-case">
                  Post Code
                </label>
                <input
                  className="checkout-input"
                  name="postcode"
                  type="text"
                  value={form.address.postcode}
                  onChange={(e) =>
                    updateForm({
                      address: { ...form.address, postcode: e.target.value }
                    })
                  }
                />
              </div>
            </div>
          </div>
          <button
            className="primary"
            onClick={() => updateForm({ shipping: false })}
          >
            Next
          </button>
        </form>
      ) : (
        <form
          id="payment-form"
          onSubmit={handleSubmit}
          className="flex flex-col items-center space-y-8"
        >
          <PaymentElement />
          <button disabled={isLoading || !stripe || !elements} id="submit">
            <span id="button-text">
              {isLoading ? (
                <div className="spinner" id="spinner"></div>
              ) : (
                'Pay now'
              )}
            </span>
          </button>
          {message && <div id="payment-message">{message}</div>}
        </form>
      )}
    </>
  );
}
