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

  const updateItemQuantity = (id, quantity) => {
    const newCart = cart.map((product) => {
      if (product.id === id) {
        product.quantity = quantity;
        product.total_price = product.price * quantity;
      }
      return product;
    });
    localStorage.setItem('cart', JSON.stringify(newCart));
    setCart(newCart);
    console.log(newCart);
  };

  const updateForm = (data) => {
    setForm({ ...form, ...data });
    localStorage.setItem('form', JSON.stringify(form));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        removeFromCart,
        updateItemQuantity,
        form,
        setForm,
        updateForm
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
