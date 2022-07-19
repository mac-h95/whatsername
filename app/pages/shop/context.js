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

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    localtStorage.setItem('cart', JSON.stringify(cart));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
