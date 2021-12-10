import React from 'react'
import { ContainerHome } from '../components/body/styled'
import Button from '../components/button/Button'
import Input from '../components/form/Input'
import NavLink from '../components/navLink/NavLink'
import { GlobalContext } from '../context/MyContext'
import { Container } from './styled'
import iconCep from '../icons/iconCep.svg'
import SvgHome from '../components/SvgHome'
import { ResponseCEP } from '../components/styledResponse'

const ByCEP = () => {
  const {cep, setCep, data} = React.useContext(GlobalContext)
  return (
    <Container>
    <NavLink />
    <ContainerHome>
    <div>
        <Input
            type='number'
            text='CEP'
            isRequired='true'
            max='8'
            placeholder='digite seu CEP aqui...'
            value={ cep }
            changeStatus={ setCep }
          />
           { data && (
          <>
            <ResponseCEP>CEP:{data.cep}</ResponseCEP>
            <ResponseCEP>Cidade: {data.localidade}</ResponseCEP>
            <ResponseCEP>UF: {data.uf}</ResponseCEP>
            <ResponseCEP>Bairro: {data.bairro}</ResponseCEP>
            <Button 
              text='Nova Busca'
              type='button'
              novaBusca='true'
            />
          </>
          )}
          <Button 
            type='button' 
            text='Buscar'
            fetch='true'
            cep={cep}
          />
          <Button 
            type='button' 
            text='Voltar'
            nextHistory='/'
          />
      </div>
      <div>
        <SvgHome icon={iconCep}/>
      </div>
      </ContainerHome>
      
      <div>
       
      </div>
    </Container>
  )
}

export default ByCEP
