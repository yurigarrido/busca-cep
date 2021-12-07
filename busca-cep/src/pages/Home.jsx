import React from 'react'
import Body from '../components/Body'
import Button from '../components/Button'

const Home = () => {
  return (
    <div>
      <Body
        title='Bem vindo ao BuscadorCEP!'
        descrition=' o aplicativo BuscadorCEP! permite que você encontre códigos e endereços postais (CEP).'
        info='Se você já tiver o CEP em mãos e gostaria de buscar seu endereço, o BuscadorCEP! também vai te ajudar.'
        incentive='Aproveite! =D'
      />
      <Button
        type='button'
        text='Buscar Endereço'
        nextHistory='buscarEndereco'
      />
      <Button
        type='button'
        text='Buscar CEP'
        nextHistory='buscarCep'
      />
    </div>
  )
}

export default Home
