import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCart } from './context';
import NextHead from 'next/head';
import { useEffect } from 'react';
const Payment = () => {
  const router = useRouter();
  const { setCart, setForm } = useCart();

  const paymentResult =
    router.query.redirect_status.charAt(0).toUpperCase() +
    router.query.redirect_status.slice(1);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const form = JSON.parse(localStorage.getItem('form'));
    if (paymentResult === 'Succeeded') {
      fetch('/api/fulfill-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ cart, form })
      }).then((res) => {
        if (res.status === 200) {
          localStorage.removeItem('cart');
          setCart([]);
          localStorage.removeItem('form');
          setForm({
            shipping: true,
            email: '',
            name: '',
            address: { line1: '', line2: '', city: '', postcode: '' }
          });
        }
      });
    }
  }, [paymentResult]);

  return (
    <>
      <NextHead>
        <title>Payment {paymentResult} | Whatsername</title>
      </NextHead>
      <div className="flex flex-col items-center max-w-md space-y-4">
        <h1>Payment {paymentResult}</h1>
        <p>Check your email for a reciept</p>
        <Link href="/shop">
          <button className="primary">Return to the homepage</button>
        </Link>
      </div>
    </>
  );
};

export default Payment;
