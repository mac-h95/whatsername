import { useCart } from './context';
import NextHead from 'next/head';
import Link from 'next/link';
import Icon from 'icon';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  const removeItem = (e) => {
    e.preventDefault();
    addToCart(details);
  };

  return (
    <>
      <NextHead>
        <title>Cart | Whatsername</title>
      </NextHead>
      <h1>Cart</h1>
      <ul className="flex flex-col items-center justify-start mt-2 space-y-4">
        {cart.map((product, i) => (
          <Link key={i} href={`/shop/products/${product.slug}`} passHref>
            <li className="flex items-center space-x-2">
              <h2>{product.name}</h2>
              <span>{product.quantity}</span>
              <form onSubmit={(e) => removeItem()}>
                <span className="cursor-pointer">
                  <Icon name="FiTrash" provider="fi" />
                </span>
              </form>
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default Cart;
