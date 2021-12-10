import React from 'react'
import { FooterStyled } from './styled'

const Footer = () => {

  const data = new Date()
  const ano = data.getFullYear();

  return (
    <FooterStyled>
      { ano } - BuscadorCEP.
    </FooterStyled>
  )
}

export default Footer
