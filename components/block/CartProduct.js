import Image from "next/image"

const CartProduct = ({ productDetails }) => {
  const { title, price, quantity, image } = productDetails

  return (
    <div className="flex items-center py-4 border-t border-gray-300">
      <section className="relative h-10 w-20">
        <Image
          src={image}
          layout="fill"
          className="object-contain"
          alt="product description"
        />
      </section>
      <section className="flex-1 flex items-center justify-between">
        <section>
          <h3 className="font-medium text-sm">{title}</h3>
          <p className="text-sm text-gray-800">Quantity: 1</p>
        </section>
        <h4 className="font-medium">${price}</h4>
      </section>
    </div>
  )
}

export default CartProduct
