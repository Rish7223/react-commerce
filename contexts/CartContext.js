import { createContext, useContext, useState } from "react"

const CartContext = createContext()
export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])

  const addItemToCart = (item) => {
    if (!cartItems.length) {
      setCartItems([...cartItems, item])
    } else {
      const isPresent = cartItems.find((element) => element.id == item.id)
      if (!isPresent) {
        setCartItems([...cartItems, item])
      }
    }
  }
  return (
    <CartContext.Provider value={{ cartItems, addItemToCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
