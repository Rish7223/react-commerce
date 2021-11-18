import React from "react"

const Button = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-10 py-2 bg-black rounded-xl shadow-sm text-white ${className}`}
    >
      {children}
    </button>
  )
}

export default Button
