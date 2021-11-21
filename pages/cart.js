import Navbar from "../components/UI/Navbar"
import { useCartContext } from "../contexts/CartContext"
import Image from "next/image"
import ProductCardHorizontal from "../components/block/ProductCardHorizontal"

const Cart = () => {
  const { cartItems } = useCartContext()
  //   console.log(cartItems)
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {cartItems?.length > 0 ? (
        <div className="flex-1 px-20 py-4 flex flex-col gap-4">
          {cartItems.map((productDetail) => (
            <ProductCardHorizontal
              productDetails={productDetail}
              key={productDetail.id}
            />
          ))}
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
