import Heading from 'heading';
import NextHead from 'next/head';
import LoadingSpinner from 'pages/utility/spinner';
import { useState } from 'react';
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
      className="flex max-w-[80%] items-baseline space-x-4 bg-background-700 rounded-lg px-12 py-8 space-evenly shadow-[inset 20px -20px 60px #3e3c3e,
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
  const [details, setDetails] = useState({
    customer: {
      firstName: '',
      lastName: '',
      email: '',
      address: { line1: '', line2: '', city: '', postcode: '' }
    },
    payment: {
      visible: false
    }
  });

  const formSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      <NextHead>
        <title>Cart</title>
      </NextHead>
      <Heading heading="Cart" />
      <div className="flex flex-col-reverse items-center justify-center w-screen px-16 md:items-start md:space-x-4 flex-re md:flex-row">
        {cart.line_items > 0 ? (
          <div className="flex flex-col items-center space-y-4 text-center">
            <h3 className="text-2xl font-bold">Your cart is empty</h3>
            <Link href="/shop">
              <button className="primary">Go shopping!</button>
            </Link>
          </div>
        ) : (
          <>
            <div className="flex flex-col items-center px-12 min-h-[25rem] w-[77vw] py-12 space-y-4 rounded-t-lg bg-gradient-to-b from-background-900 to-background-500">
              <form
                className="relative flex flex-col max-w-md space-y-6"
                action={formSubmit}
              >
                <h3 className="text-4xl font-bold text-center md:text-left">
                  {!details.payment.visible ? (
                    <span>Shipping Address</span>
                  ) : (
                    <span>Payment Details</span>
                  )}
                </h3>
                <div className="flex flex-col max-w-md space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex flex-col space-y-4">
                      <label className="text-xl">First Name</label>
                      <input
                        type="text"
                        className="input"
                        value={details.customer.firstName}
                        onChange={(e) =>
                          setDetails({
                            ...details,
                            customer: {
                              ...details.customer,
                              firstName: e.target.value
                            }
                          })
                        }
                      />
                    </div>
                    <div className="flex flex-col space-y-4">
                      <label className="text-xl">Last Name</label>
                      <input
                        type="text"
                        className="input"
                        value={details.customer.lastName}
                        onChange={(e) =>
                          setDetails({
                            ...details,
                            customer: {
                              ...details.customer,
                              lastName: e.target.value
                            }
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="flex flex-col space-y-4">
                    <label className="text-xl">Email Address</label>
                    <input
                      type="text"
                      className="input"
                      value={details.customer.email}
                      onChange={(e) =>
                        setDetails({
                          ...details,
                          customer: {
                            ...details.customer,
                            email: e.target.value
                          }
                        })
                      }
                    />
                  </div>
                  <div className="flex flex-col space-y-4">
                    <label className="text-xl">Address Line 1</label>
                    <input
                      type="text"
                      className="input"
                      value={details.customer.address.line1}
                      onChange={(e) =>
                        setDetails({
                          ...details,
                          customer: {
                            ...details.customer,
                            address: {
                              ...details.customer.address,
                              line1: e.target.value
                            }
                          }
                        })
                      }
                    />
                  </div>
                  <div className="flex flex-col space-y-4">
                    <label className="text-xl">Address Line 2</label>
                    <input
                      type="text"
                      className="input"
                      value={details.customer.address.line2}
                      onChange={(e) =>
                        setDetails({
                          ...details,
                          customer: {
                            ...details.customer,
                            address: {
                              ...details.customer.address,
                              line2: e.target.value
                            }
                          }
                        })
                      }
                    />
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex flex-col space-y-4">
                      <label className="text-xl">City</label>
                      <input
                        type="text"
                        className="input"
                        value={details.customer.address.city}
                        onChange={(e) =>
                          setDetails({
                            ...details,
                            customer: {
                              ...details.customer,
                              address: {
                                ...details.customer.address,
                                city: e.target.value
                              }
                            }
                          })
                        }
                      />
                    </div>
                    <div className="flex flex-col space-y-4">
                      <label className="text-xl">Post Code</label>
                      <input
                        type="text"
                        className="input"
                        value={details.customer.address.postcode}
                        onChange={(e) =>
                          setDetails({
                            ...details,
                            customer: {
                              ...details.customer,
                              address: {
                                ...details.customer.address,
                                postcode: e.target.value
                              }
                            }
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="flex flex-col py-12 space-y-4 min-h-[25rem] text-center rounded-t-lg w-[60vw] md:text-left mx:px-12 bg-gradient-to-b from-background-900 to-background-500">
              <h3 className="text-4xl font-bold text-center">Shopping Cart</h3>
              <div className="flex flex-col items-center space-y-4 overflox-y-scroll">
                {cart.line_items < 1 ? (
                  <LoadingSpinner />
                ) : (
                  <>
                    {cart.line_items.map((item) => {
                      return <CartItem key={item.id} {...item} />;
                    })}
                  </>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
