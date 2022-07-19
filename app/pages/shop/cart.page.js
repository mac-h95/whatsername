import { useCart } from './context';
import NextHead from 'next/head';
import Link from 'next/link';
import Icon from 'icon';

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  return (
    <>
      <NextHead>
        <title>Cart | Whatsername</title>
      </NextHead>
      <h1>Cart</h1>
      <ul className="flex flex-col items-center justify-start mt-2 space-y-4">
        {cart.map((product) => (
          <Link
            key={product.slug}
            href={`/shop/products/${product.slug}`}
            passHref
          >
            <li className="flex items-center space-x-2">
              <h2>{product.name}</h2>
              <span>{product.quantity}</span>
              <span
                onClick={() => removeFromCart(product.slug)}
                className="cursor-pointer"
              >
                <Icon name="FiTrash" provider="fi" />
              </span>
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default Cart;
