import { createContext, useContext, useEffect, useReducer } from 'react';
import { commerce } from './commerce';

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_CART':
      return {
        ...state,
        ...action.payload
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    subtotal: {
      raw: 0,
      formatted_with_symbol: '£0.00'
    },
    line_items: []
  });

  useEffect(() => {
    getCart();
  }, []);

  const setCart = (payload) => dispatch({ type: 'SET_CART', payload });

  const getCart = async () => {
    try {
      const cart = await commerce.cart.retrieve();
      setCart(cart);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CartDispatchContext.Provider value={{ setCart }}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

export const useCartState = () => useContext(CartStateContext);
export const useCartDispatch = () => useContext(CartDispatchContext);
export default CartProvider;
