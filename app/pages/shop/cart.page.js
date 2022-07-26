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
      <h1 className="-mt-52">Cart</h1>
      <Navigation />
      {cart.length > 0 ? (
        <>
          <ul className="flex flex-col items-start mt-2 space-y-4">
            {cart.map((product, i) => (
              <li
                key={i}
                className="flex items-center justify-start px-6 py-2 space-x-8 border-b border-gray-30"
              >
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
          <div className="flex flex-col items-center mt-8 space-y-2">
            <span className="text-2xl font-bold">
              Total: £
              {cart
                .map((product) => product.total_price)
                .reduce((a, b) => a + b, 0)}
            </span>
            <Link href="/shop/checkout">
              <button className="primary">Checkout</button>
            </Link>
          </div>
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
