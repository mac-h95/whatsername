import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import NextHead from 'next/head';
import LoadingSpinner from 'pages/utility/spinner';
import { useEffect, useState } from 'react';

import CheckoutForm from './checkout/form';
import { useCart } from './context';
import Navigation from './navigation';

const stripePromise = loadStripe(
  'pk_test_51LC0NQE61EXQFmDyWNXYF1ufvfp4JxNynFlx77zTaztuRTOkxqAyN3OZVRt9zNypaEZTrJyxKFqPrJY6STG4Fht200Go2kUpOQ'
);
[];
export default function Checkout() {
  const [clientSecret, setClientSecret] = useState('');
  const { cart } = useCart();

  useEffect(() => {
    fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: cart })
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [cart]);

  const appearance = {
    theme: 'night',
    variables: {
      colorPrimary: '#ffdefb',
      colorText: '#fdfdfd',
      colorBackground: '#1c181b',
      borderRadius: '0px'
    }
  };
  const options = {
    clientSecret,
    appearance
  };
  if (cart.length > 0) {
    return (
      <>
        <NextHead>
          <title>Checkout | Whatsername</title>
        </NextHead>
        <Navigation />
        {clientSecret && (
          <Elements options={options} stripe={stripePromise}>
            <span className="mb-12 text-2xl font-bold">
              Total: £
              {cart
                .map((product) => product.total_price)
                .reduce((a, b) => a + b, 0)}
            </span>
            <CheckoutForm />
          </Elements>
        )}
        {!clientSecret && <LoadingSpinner />}
      </>
    );
  } else {
    return <></>;
  }
}
