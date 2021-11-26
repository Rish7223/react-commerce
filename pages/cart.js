import Navbar from "../components/UI/Navbar"
import { useCartContext } from "../contexts/CartContext"
import Image from "next/image"
import ProductCardHorizontal from "../components/block/ProductCardHorizontal"
import Button from "../components/UI/Button"
import CartProduct from "../components/block/CartProduct"
import { loadStripe } from "@stripe/stripe-js"
import axios from "axios"
import { useAuthContext } from "../contexts/AuthContext"
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY)

const Cart = () => {
  const { cartItems, totalAmount } = useCartContext()
  const { authUser } = useAuthContext()

  const handelPayment = async () => {
    const stripe = await stripePromise
    const response = await axios.post("/api/create-checkout-session", {
      items: cartItems,
      email: authUser.email,
    })

    const result = await stripe.redirectToCheckout({
      sessionId: response.data.id,
    })

    if (result.error) alert(result.error.message)
  }
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {cartItems?.length > 0 ? (
        <div className="flex px-20 py-4 gap-4">
          <div className="flex-1 flex flex-col gap-4">
            {cartItems.map((productDetail) => (
              <ProductCardHorizontal
                productDetails={productDetail}
                key={productDetail.id}
              />
            ))}
          </div>
          <section className="w-96">
            <div className="w-full p-4 border border-gray-300 rounded-lg flex flex-col">
              <h2 className="text-xl font-semibold text-black mb-4">
                Order Details
              </h2>
              <div>
                {cartItems.map((productDetail) => (
                  <CartProduct
                    productDetails={productDetail}
                    key={productDetail.id}
                  />
                ))}
              </div>
              <section className="border-t border-gray-300 flex items-center justify-between py-4">
                <p className="text-md font-semibold text-black">
                  Total Amount:
                </p>
                <p className="text-lg font-semibold text-black">
                  ${totalAmount}
                </p>
              </section>
              <section>
                <Button
                  className="w-full"
                  onClick={() => {
                    console.log("click")
                    handelPayment()
                  }}
                >
                  Checkout
                </Button>
              </section>
            </div>
          </section>
        </div>
      ) : (
        <section className="flex-1 flex flex-col items-center justify-center">
          <Image
            src="/empty-list.png"
            alt="empty cart"
            height={300}
            width={300}
            layout="fixed"
            className="mb-10"
          />
          <h3 className="text-xl font-semibold text-black">
            Empty Cart! Please add items.
          </h3>
        </section>
      )}
    </div>
  )
}

export default Cart
