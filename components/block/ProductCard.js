import Image from "next/image"
import { FaShoppingCart } from "react-icons/fa"
import { useCartContext } from "../../contexts/CartContext"
import { trimString } from "../../utilityFnc/StringFunc"
import Button from "../UI/Button"

const ProductCard = ({ productDetails }) => {
  const { addItemToCart } = useCartContext()
  const { title, price, description, image } = productDetails
  return (
    <div className="px-4 py-6 bg-gray-100 border border-gray-200 rounded-2xl flex flex-col">
      <section className="relative h-56 bg-white rounded-2xl">
        <Image
          alt={title}
          src={image}
          className="object-contain"
          layout="fill"
        />
        <button
          className="bg-black p-3 rounded-full absolute -bottom-6 right-4 shadow-lg hover:shadow-xl"
          onClick={() => {
            addItemToCart(productDetails)
          }}
        >
          <FaShoppingCart size={18} color="white" />
        </button>
      </section>

      <section className="mt-4">
        <h3 className="text-xl font-semibold text-black">{title}</h3>
        <h3 className="text-2xl font-semibold text-black">${price}</h3>
        <p className="text-base mt-4 text-black">
          {trimString(description)}...
        </p>
      </section>
      <Button className="mt-4">View Product</Button>
    </div>
  )
}

export default ProductCard
