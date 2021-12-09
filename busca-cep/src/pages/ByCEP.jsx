import React from 'react'
import { ContainerHome } from '../components/body/styled'
import Button from '../components/button/Button'
import Input from '../components/form/Input'
import NavLink from '../components/navLink/NavLink'
import { GlobalContext } from '../context/MyContext'
import { Container } from './styled'
import iconCep from '../icons/iconCep.svg'
import SvgHome from '../components/SvgHome'

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
        { data && (
          <>
            <span>CEP:</span>
            <p>{data.cep}</p>
            <span>Cidade:</span>
            <p>{data.localidade}</p>
            <span>UF:</span>
            <p>{data.uf}</p>
            <span>Bairro: </span>
            <p>{data.bairro}</p>
            <Button 
              text='Nova Busca'
              type='button'
              novaBusca='true'
            />
          </>
          )}
      </div>
    </Container>
  )
}

export default ByCEP
