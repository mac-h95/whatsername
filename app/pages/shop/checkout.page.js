import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import LoadingSpinner from 'pages/utility/spinner';
import { useEffect, useState } from 'react';

import CheckoutForm from './checkout/form';
import Navigation from './navigation';

const stripePromise = loadStripe(
  'pk_test_51LC0NQE61EXQFmDyWNXYF1ufvfp4JxNynFlx77zTaztuRTOkxqAyN3OZVRt9zNypaEZTrJyxKFqPrJY6STG4Fht200Go2kUpOQ'
);

export default function Checkout() {
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: [{ id: 'xl-tshirt' }] })
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

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

  return (
    <>
      <Navigation />
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <span className="mb-12 text-2xl font-bold">Total: £140</span>
          <CheckoutForm />
        </Elements>
      )}
      {!clientSecret && <LoadingSpinner />}
    </>
  );
}
