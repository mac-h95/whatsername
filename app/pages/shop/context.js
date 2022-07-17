import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState
} from 'react';

export const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.payload];
  }
};

export const CartProvider = ({ children }) => {
  const initialState = [];
  const [cart, setCart] = useState([]);
  const [state, dispatch] = useReducer(cartReducer, cart);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem('cart'));
    if (cartData) {
      setCart(cartData);
    }
  }, []);

  useEffect(() => {
    if (cart !== initialState) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
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
