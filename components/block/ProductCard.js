import Image from "next/image"
import { FaShoppingCart } from "react-icons/fa"
import { trimString } from "../../utilityFnc/StringFunc"
import Button from "../UI/Button"

// const productOne = {
//   id: 2,
//   title: "Slim Fit T-Shirts ",
//   price: 22.3,
//   description:
//     "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
//   category: "men's clothing",
//   image:
//     "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
// }

const ProductCard = ({ productDetails }) => {
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
        <button className="bg-black p-3 rounded-full absolute -bottom-6 right-4 shadow-lg hover:shadow-xl">
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
      <Button className="mt-4">Read More</Button>
    </div>
  )
}

export default ProductCard
