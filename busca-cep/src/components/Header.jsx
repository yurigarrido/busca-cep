import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Link to='/'>BuscadorCEP</Link>
      <Link to='/buscarEndereco'>Buscar Endereço</Link>
      <Link to='/buscarCep'>Buscar CEP</Link>
    </header>
  )
}

export default Header
