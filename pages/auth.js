import Head from "next/head"
import Image from "next/image"
import { FcGoogle } from "react-icons/fc"
import Link from "next/link"
import { FaArrowLeft } from "react-icons/fa"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { useAuthContext } from "../contexts/AuthContext"

const Auth = () => {
  const { isAuthenticated, authLoading, authenticateUser, onAuthChange } =
    useAuthContext()
  const router = useRouter()

  useEffect(() => {
    onAuthChange()
    if (isAuthenticated !== null && isAuthenticated) {
      router.push("/")
    }
  }, [isAuthenticated])

  const handleAuthenticate = () => {
    authenticateUser()
  }

  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center bg-gray-200">
      <Head>
        <title>React Commerce</title>
        <meta
          name="description"
          content="Auth | E-commerce web app build upon NextJs"
        />
      </Head>

      <Link href="/">
        <a className="absolute top-20 left-20 flex items-center gap-4   ">
          <FaArrowLeft size={30} />
          <p className="text-xl text-black font-semibold">Go Back</p>
        </a>
      </Link>
      <div className="w-1/2 bg-gray-200 flex flex-col items-center ">
        <h2 className="text-3xl text-black font-semibold">React-Commerce</h2>
        <Image
          src="/authImage.png"
          height={300}
          width={300}
          alt="auth illustration"
        />

        <button
          className="px-10 py-2 w-72 rounded-xl bg-blue-700 flex items-center justify-center mt-6"
          onClick={handleAuthenticate}
        >
          {authLoading ? (
            <Image
              alt="loading..."
              src="/three-dots.svg"
              height={20}
              width={20}
              layout="fixed"
            />
          ) : (
            <>
              <FcGoogle size={20} />
              <p className="text-white ml-10">Sign in using google</p>
            </>
          )}
        </button>
      </div>
    </div>
  )
}

export default Auth
