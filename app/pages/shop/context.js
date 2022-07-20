import { createContext, useContext, useEffect, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem('cart'));

    if (cartData) {
      setCart(cartData);
    }
  }, []);

  const addToCart = async (product) => {
    const newCart = [...cart, product];
    localStorage.setItem('cart', JSON.stringify(newCart));
    setCart(newCart);
  };

  const removeFromCart = (id) => {
    const newCart = cart.filter((product) => product.id !== id);
    localStorage.setItem('cart', JSON.stringify(newCart));
    setCart(newCart);
    console.log(JSON.parse(localStorage.getItem('cart')));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        removeFromCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
