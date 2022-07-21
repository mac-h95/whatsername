import { createContext, useContext, useEffect, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [form, setForm] = useState({
    shipping: true,
    email: '',
    name: '',
    address: { line1: '', line2: '', city: '', postcode: '' }
  });

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem('cart'));
    const formData = JSON.parse(localStorage.getItem('form'));
    if (cartData) {
      setCart(cartData);
    }
    if (formData) {
      setForm(formData);
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
  };

  const clearCart = () => {
    localStorage.removeItem('cart');
    setCart([]);
  };

  const updateForm = (data) => {
    setForm({ ...form, ...data });
    localStorage.setItem('form', JSON.stringify(form));

  };

  const clearForm = () => {
    localStorage.removeItem('form');
    setForm({
      shipping: true,
      email: '',
      name: '',
      address: { line1: '', line2: '', city: '', postcode: '' }
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        removeFromCart,
        form,
        updateForm
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
