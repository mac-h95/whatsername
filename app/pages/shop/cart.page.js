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
      className="flex items-baseline space-x-4 bg-background-600 rounded-lg px-12 py-8 space-evenly shadow-[inset 20px -20px 60px #3e3c3e,
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
      <div className="flex flex-col space-y-4">
        {cart.line_items.length === 0 ? (
          <div className="flex flex-col items-center space-y-4 text-center">
            <h3 className="text-2xl font-bold">Your cart is empty</h3>
            <Link href="/shop">
              <button className="primary">Go shopping!</button>
            </Link>
          </div>
        ) : (
          <>
            {cart.line_items.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
