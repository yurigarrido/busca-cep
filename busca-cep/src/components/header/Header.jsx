import React from 'react'
import { Link } from 'react-router-dom';
import { HeaderContainer } from './styled'

const Header = () => {
  return (
    <HeaderContainer>
      <Link to='/'>BuscadorCEP</Link>
      <Link to='/buscarEndereco'>Buscar Endereço</Link>
      <Link to='/buscarCep'>Buscar CEP</Link>
    </HeaderContainer>
  )
}

export default Header
