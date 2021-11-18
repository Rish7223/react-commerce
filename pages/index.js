import Head from "next/head"
import ProductCard from "../components/block/ProductCard"
import { PopularProducts } from "../products"
import Navbar from "../components/UI/Navbar"

export default function Home() {
  return (
    <div>
      <Head>
        <title>React-Commerce</title>
        <meta
          name="description"
          content="E-commerce web app build upon NextJs"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="px-8 xl:px-20 py-10">
        <h2 className="text-3xl font-semibold text-black">Products</h2>
        <section className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {PopularProducts.map((product) => (
            <ProductCard productDetails={product} key={product.id} />
          ))}
        </section>
      </div>
    </div>
  )
}
