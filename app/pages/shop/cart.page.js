import { useCart } from './context';
import NextHead from 'next/head';
import Link from 'next/link';
import Icon from 'icon';
import Navigation from './navigation';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  const removeItem = (id) => {
    removeFromCart(id);
  };
  return (
    <>
      <NextHead>
        <title>Cart | Whatsername</title>
      </NextHead>
      <h1>Cart</h1>
      <Navigation />
      {cart.length > 0 ? (
        <>
          <ul className="flex flex-col items-start mt-2 space-y-4">
            {cart.map((product, i) => (
              <li key={i} className="flex items-center justify-start space-x-8">
                <Link href={`/shop/products/${product.slug}`}>
                  <h2 className="font-bold cursor-pointer">{product.name}</h2>
                </Link>
                <span>{product.quantity}</span>
                <span
                  className="cursor-pointer"
                  onClick={(e) => (e.preventDefault(), removeItem(product.id))}
                >
                  <Icon name="FiTrash" provider="fi" />
                </span>
              </li>
            ))}
          </ul>
          <Link href="/shop/checkout">
            <button className="mt-8 primary">Checkout</button>
          </Link>
        </>
      ) : (
        <div className="flex flex-col items-center space-y-2">
          <h2 className="text-2xl font-bold">Your cart is empty...</h2>
          <Link href="/shop">
            <button className="primary">Go Shopping!</button>
          </Link>
        </div>
      )}
    </>
  );
};

export default Cart;
