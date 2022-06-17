import Icon from 'icon';
import Link from 'next/link';
import { useCartState } from '../context';

const ShopNavigation = () => {
  const cart = useCartState();

  return (
    <div className="flex items-center justify-between w-screen px-4 mb-4 md:px-16">
      <div className="flex items-center">
        <Link href="/shop">
          <a className="text-xl text-primary-500 hover:text-primary-600">
            <Icon name="FiArrowLeft" provider="fi" />
          </a>
        </Link>
      </div>
      <Link href="/shop/cart">
        <a className="flex items-center space-x-2">
          <Icon name="FiShoppingCart" provider="fi" />
          <span className="text-xl">{cart.subtotal.formatted_with_symbol}</span>
        </a>
      </Link>
    </div>
  );
};

export default ShopNavigation;
