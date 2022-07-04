import Icon from 'icon';
import Link from 'next/link';
import { useRouter } from 'next/router';


const Navigation = () => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <nav className="flex items-center justify-between w-screen px-16 mb-16 text-3xl">
      {pathname === '/shop' ? (
        <div className="flex-1" />
      ) : (
        <Link href="/shop">
          <a>
            <Icon name="FiArrowLeft" provider="fi" />
          </a>
        </Link>
      )}
      <Link href="/shop/checkout">
        <div className="flex items-center space-x-2 text-2xl">
          <Icon name="FiShoppingCart" provider="fi" />
          <span>£{cart.total_price}</span>
        </div>
      </Link>
    </nav>
  );
};

export default Navigation;
