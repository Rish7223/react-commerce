import Image from "next/image"
import { FaShoppingCart, FaHeart } from "react-icons/fa"
import Button from "./Button"
import Link from "next/link"
import { useAuthContext } from "../../contexts/AuthContext"

const Navbar = () => {
  const { isAuthenticated, authUser, signOutUser } = useAuthContext()
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

        {isAuthenticated ? (
          <div className="flex items-center gap-4">
            <Image
              src={authUser?.photoUrl}
              alt="user profile avatar"
              height={40}
              width={40}
              layout="fixed"
              className="rounded-full border border-gray-200"
            />
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
              <span className="px-10 py-2 bg-black rounded-xl shadow-sm text-white">
                Login
              </span>
            </a>
          </Link>
        )}
      </section>
    </div>
  )
}

export default Navbar
