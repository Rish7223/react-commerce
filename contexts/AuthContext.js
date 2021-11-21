import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "@firebase/auth"
import { createContext, useState, useContext } from "react"
import { fireAuth } from "../firebase"

const AuthContext = createContext()

export const useAuthContext = () => useContext(AuthContext)

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [authLoading, setAuthLoading] = useState(false)
  const [authUser, setAuthUser] = useState(null)

  const authenticateUser = async () => {
    try {
      setAuthLoading(true)
      const googleAuthProvider = new GoogleAuthProvider()
      const response = await signInWithPopup(fireAuth, googleAuthProvider)
      const user = {
        email: response?.user?.email,
        name: response?.user?.displayName,
        photoUrl: response?.user?.photoURL,
      }
      setAuthUser(user)
      setIsAuthenticated(true)
      setAuthLoading(false)
    } catch (error) {
      console.log(error.message)
      setAuthLoading(false)
    }
  }

  const onAuthChange = () => {
    try {
      setAuthLoading(true)
      onAuthStateChanged(fireAuth, (user) => {
        if (user) {
          setIsAuthenticated(true)
          setAuthUser({
            email: user?.email,
            name: user?.displayName,
            photoUrl: user?.photoURL,
          })
          setAuthLoading(false)
        } else {
          setIsAuthenticated(false)
          setAuthUser(null)
          setAuthLoading(false)
        }
      })
    } catch (error) {
      console.log(error.message)
      setAuthLoading(false)
    }
  }

  const signOutUser = async () => {
    await signOut(fireAuth)
    setIsAuthenticated(false)
    setAuthUser(null)
    setAuthLoading(false)
  }

  //   component return
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        onAuthChange,
        authLoading,
        authUser,
        authenticateUser,
        signOutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
