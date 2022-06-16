import Icon from 'icon';
import Link from 'next/link';
import { useCartState } from '../context';

const ShopNavigation = () => {
  const cart = useCartState();

  return (
    <div className="flex items-center justify-between w-screen px-4 mb-4 md:px-16">
      <div className="flex-1" />
      <Link href="/shop/checkout">
        <div className="flex items-center space-x-2">
          <Icon name="FiShoppingCart" provider="fi" />
          <span className="text-xl">{cart.subtotal.formatted_with_symbol}</span>
        </div>
      </Link>
    </div>
  );
};

export default ShopNavigation;
