import React from 'react'

const Footer = () => {

  const data = new Date()
  const ano = data.getFullYear();

  return (
    <footer>
      { ano } - BuscadorCEP.
    </footer>
  )
}

export default Footer
