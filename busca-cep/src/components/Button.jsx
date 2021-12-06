import React from 'react'

const Button = ({text, type, onClick}) => {
  return (
    <button
      type={type}
      onClick={(e) => e.preventDefault()}
    >
      { text }
    </button>
  )
}

export default Button
