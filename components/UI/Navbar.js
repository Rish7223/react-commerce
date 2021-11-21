import Image from "next/image"
import { FaShoppingCart, FaHeart } from "react-icons/fa"
import Button from "./Button"
import Link from "next/link"
import { useAuthContext } from "../../contexts/AuthContext"
import { useCartContext } from "../../contexts/CartContext"
import { useEffect } from "react"

const Navbar = () => {
  const { isAuthenticated, authUser, signOutUser, authLoading, onAuthChange } =
    useAuthContext()
  const { cartItems } = useCartContext()

  useEffect(() => {
    onAuthChange()
  }, [])
  return (
    <div className="px-8 xl:px-20 py-4 flex items-center justify-between">
      <Link href="/">
        <a>
          <Image
            src="/vercel.svg"
            height={90}
            width={90}
            layout="fixed"
            alt="logo"
          />
        </a>
      </Link>
      <section className="flex items-center gap-10">
        <Link href="/cart">
          <a className="relative">
            <div
              className={`h-7 w-7 rounded-full bg-gray-600 text-white flex items-center justify-center absolute -right-5 -top-5 ${
                cartItems.length == 0 && "hidden"
              }`}
            >
              {cartItems?.length}
            </div>
            <FaShoppingCart size={25} className=" z-10" />
          </a>
        </Link>
        <FaHeart size={25} />

        {isAuthenticated ? (
          <div className="flex items-center gap-4">
            {authUser && (
              <Image
                src={authUser?.photoUrl}
                alt="user profile avatar"
                height={40}
                width={40}
                layout="fixed"
                className="rounded-full border border-gray-200"
              />
            )}
            <Button
              onClick={() => {
                console.log("hello")
                signOutUser()
              }}
            >
              Logout
            </Button>
          </div>
        ) : (
          <Link href="/auth">
            <a>
              <span className="px-10 py-2 bg-black rounded-xl shadow-sm text-white flex items-center justify-center">
                {!authLoading ? (
                  "Login"
                ) : (
                  <Image
                    src="/three-dots.svg"
                    height={25}
                    width={25}
                    layout="fixed"
                    alt="loading..."
                  />
                )}
              </span>
            </a>
          </Link>
        )}
      </section>
    </div>
  )
}

export default Navbar
