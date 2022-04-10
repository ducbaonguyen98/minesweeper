import React from "react"

export const Button = ({ onClick, text, className }) => {
  return (
    <button onClick={onClick} type="button" className={`w-36 py-3 border text-sm rounded-lg transition-all duration-300 ${className}`}>{text}</button>
  )
} 