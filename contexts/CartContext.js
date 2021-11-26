import { createContext, useContext, useEffect, useState } from "react"

const CartContext = createContext()
export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])
  const [totalAmount, setTotalAmount] = useState(Number(0))

  useEffect(() => {
    let countAmount = 0
    cartItems.map((item) => {
      countAmount += item.price
    })
    setTotalAmount(Number(countAmount))
  }, [cartItems])

  const addItemToCart = (item) => {
    if (!cartItems.length) {
      const cartSchema = {
        ...item,
        quantity: 1,
      }
      setCartItems([...cartItems, cartSchema])
    } else {
      const isPresent = cartItems.find((element) => element.id == item.id)
      if (!isPresent) {
        setCartItems([...cartItems, item])
      }
    }
  }

  const increaseQuantity = (itemId) => {
    // const itemData = cartItems.find((product) => product.id == itemId)
    // itemData.quantity += 1
    const newArray = cartItems.map((product) => {
      if (product.id == itemId) {
        product.quantity += 1
      }
    })
    console.log(newArray)
    // setCartItems(newArray)
  }

  const removeItemFromCart = (itemId) => {
    const newItemList = cartItems.filter((element) => element.id !== itemId)
    setCartItems(newItemList)
  }
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemToCart,
        removeItemFromCart,
        increaseQuantity,
        totalAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
