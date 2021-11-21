import AuthProvider from "../contexts/AuthContext"
import CartContextProvider from "../contexts/CartContext"
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <CartContextProvider>
        <Component {...pageProps} />
      </CartContextProvider>
    </AuthProvider>
  )
}

export default MyApp
