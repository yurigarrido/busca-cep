import React from 'react'
import Body from '../components/body/Body'
import Button from '../components/button/Button'
import { Container } from './styled'

const Home = () => {
  return (
    <Container>
      <Body
        title='Bem vindo ao BuscadorCEP!'
        descrition=' o aplicativo BuscadorCEP! permite que você encontre códigos e endereços postais (CEP).'
        info='Se você já tiver o CEP em mãos e gostaria de buscar seu endereço, o BuscadorCEP! também vai te ajudar.'
        incentive='Aproveite! =D'
      />
      <span>
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
      </span>
    </Container>
  )
}

export default Home
