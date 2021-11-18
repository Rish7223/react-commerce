import Image from "next/image"
import { FaShoppingCart, FaHeart } from "react-icons/fa"
import Button from "./Button"
import Link from "next/link"

const Navbar = () => {
  return (
    <div className="px-8 xl:px-20 py-4 flex items-center justify-between">
      <Image
        src="/vercel.svg"
        height={90}
        width={90}
        layout="fixed"
        alt="logo"
      />
      <section className="flex items-center gap-10">
        <FaShoppingCart size={25} />
        <FaHeart size={25} />

        <Link href="/auth">
          <a>
            <Button>Login</Button>
          </a>
        </Link>
      </section>
    </div>
  )
}

export default Navbar
