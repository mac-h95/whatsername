import Icon from 'icon';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCart } from './context';

const Navigation = () => {
  const router = useRouter();
  const { pathname } = router;
  const cartItems = useCart().cart.length;

  return (
    <nav className="flex items-center justify-between w-screen px-6 mb-16 text-3xl md:px-16">
      {pathname === '/shop' ? (
        <div className="flex-1" />
      ) : (
        <Link href="/shop">
          <a className="text-primary-500 hover:text-primary-600">
            <span className="flex items-center space-x-2 text-sm">
              <span className="text-2xl">
                <Icon name="FiChevronLeft" provider="fi" />
              </span>
              Back
            </span>
          </a>
        </Link>
      )}
      {pathname === '/shop/cart' ? (
        <div className="flex-1" />
      ) : (
        <Link href="/shop/cart">
          <a className="flex items-start space-x-2 text-2xl">
            <Icon name="FiShoppingCart" provider="fi" />
            <small>{cartItems}</small>
          </a>
        </Link>
      )}
    </nav>
  );
};

export default Navigation;
