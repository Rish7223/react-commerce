import Image from "next/image"
import { trimString } from "../../utilityFnc/StringFunc"
import { FaPlus, FaMinus } from "react-icons/fa"
import { useState } from "react"

const ProductCardHorizontal = ({ productDetails }) => {
  const { image, title, price, description } = productDetails
  const [count, setCount] = useState(Number(1))
  return (
    <div className="py-4 px-4 flex  border border-gray-300 bg-white rounded-xl">
      <section className="w-36 h-24">
        <div className="relative h-full w-full rounded-xl">
          <Image
            src={image}
            layout="fill"
            alt={title}
            className="object-contain"
          />
        </div>
      </section>
      <section className="flex-1 flex flex-col gap-1 pl-10">
        <h2 className="text-xl text-color font-semibold">{title}</h2>
        <h2 className="text-2xl text-gray-900 font-semibold">${price}</h2>
      </section>
      <div className="w-60 flex flex-col items-center justify-center">
        <section className="flex items-center gap-4 mb-6">
          <button
            className="border-2 border-black p-2 rounded-xl"
            onClick={() => {
              if (count < 6) {
                setCount(count + 1)
              }
            }}
          >
            <FaPlus size={16} className="text-black" />
          </button>
          <span className="text-xl font-semibold">{count}</span>
          <button
            className="border-2 border-black p-2 rounded-xl"
            onClick={() => {
              if (count > 1) {
                setCount(count - 1)
              }
            }}
          >
            <FaMinus size={16} className="text-black" />
          </button>
        </section>
        <button className="focus-within bg-black shadow-sm text-white py-2 px-8 rounded-2xl">
          Remove
        </button>
      </div>
    </div>
  )
}

export default ProductCardHorizontal
