import { commerce } from 'commerce';
import Heading from 'heading';
import Link from 'next/link';
import { useCartDispatch, useCartState } from './context';

const CartItem = ({ id, name, line_total, quantity }) => {
  const { setCart } = useCartDispatch();

  const handleUpdateCart = ({ cart }) => setCart(cart);

  const decerementQuantity = () =>
    quantity > 1
      ? commerce.cart
          .update(id, { quantity: quantity - 1 })
          .then(handleUpdateCart)
      : removeItem();

  const incrementQuantity = () =>
    commerce.cart.update(id, { quantity: quantity + 1 }).then(handleUpdateCart);

  const removeItem = () => commerce.cart.remove(id).then(handleUpdateCart);

  return (
    <div
      className="flex items-baseline space-x-4 bg-background-700 rounded-lg px-12 py-8 space-evenly shadow-[inset 20px -20px 60px #3e3c3e,
        inset -20px 20px 60px #545154;]"
    >
      <p>{name}</p>
      <div className="flex items-baseline justify-center space-x-3">
        <span onClick={decerementQuantity} className="quantity">
          -
        </span>
        <span className="text-2xl">{quantity}</span>
        <span onClick={incrementQuantity} className="quantity">
          +
        </span>
      </div>
      <p>{line_total.formatted_with_symbol}</p>
    </div>
  );
};

const Cart = () => {
  const cart = useCartState();
  console.log(cart.line_items);
  return (
    <>
      <Heading heading="Cart" />
      <div className="flex items-start justify-center w-screen space-x-4">
        <div className="flex flex-col px-12 py-12 space-y-4 rounded-lg shadow-md bg-background-600">
          <form className="flex flex-col max-w-md space-y-6">
            <h3 className="text-4xl font-bold">Shipping Address</h3>
            <div className="flex items-center space-x-4">
              <div className="flex flex-col space-y-4">
                <label className="text-xl">First Name</label>
                <input type="text" className="input" />
              </div>
              <div className="flex flex-col space-y-4">
                <label className="text-xl">Last Name</label>
                <input type="text" className="input" />
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <label className="text-xl">Email Address</label>
              <input type="text" className="input" />
            </div>
            <div className="flex flex-col space-y-4">
              <label className="text-xl">Address Line 1</label>
              <input type="text" className="input" />
            </div>
            <div className="flex flex-col space-y-4">
              <label className="text-xl">Address Line 2</label>
              <input type="text" className="input" />
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex flex-col space-y-4">
                <label className="text-xl">City</label>
                <input type="text" className="input" />
              </div>
              <div className="flex flex-col space-y-4">
                <label className="text-xl">Post Code</label>
                <input type="text" className="input" />
              </div>
            </div>
            <button className="w-full px-3 py-2 border-2 rounded-lg border-primary-500 text-background-500 bg-primary-500">
              Continue to Payment
            </button>
          </form>
        </div>
        <div className="flex flex-col px-12 py-12 space-y-4 rounded-lg shadow-md bg-background-600">
          {cart.line_items.length === 0 ? (
            <div className="flex flex-col items-center space-y-4 text-center">
              <h3 className="text-2xl font-bold">Your cart is empty</h3>
              <Link href="/shop">
                <button className="primary">Go shopping!</button>
              </Link>
            </div>
          ) : (
            <>
              <h3 className="text-4xl font-bold">Shopping Cart</h3>
              {cart.line_items.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
