import Icon from 'icon'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useCart } from './cart'

const Navigation = () => {
  const router = useRouter()
  const { pathname } = router
  console.log(useCart().cart)
  return (
    <nav className="flex items-center justify-between w-screen text-3xl md:mb-16 md:px-16">
      {pathname === '/shop' ? (
        <div className="flex-1" />
      ) : (
        <Link href="/shop">
        <a className="text-primary-500 hover:text-primary-600">
          <span className='flex items-center space-x-2 text-sm'>
            <span className='text-2xl'>
              <Icon name='FiChevronLeft' provider='fi'/> 
            </span>
            Back
          </span>
          
        </a>
      </Link>
      )}
      <Link href="/shop/checkout">
        <div className="flex items-center space-x-2 text-2xl">
      {/*    <Icon name="FiShoppingCart" provider="fi" />
      <span>{useCart().length}</span>*/}
        </div>
      </Link>
    </nav>
  )
}

export default Navigation
