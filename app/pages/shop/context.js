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

  const removeFromCart = (slug) => {
    setCart((prevCart) => prevCart.filter((product) => product.slug !== slug));
    localStorage.setItem('cart', JSON.stringify(cart));
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
