import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    console.log(product)
    setCart([...cart, product])
  }

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => {
  return useContext(CartContext)
}

export { CartProvider, useCart }
