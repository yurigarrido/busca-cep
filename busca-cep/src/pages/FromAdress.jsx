import React from 'react'
import { ContainerHome } from '../components/body/styled';
import FormAdress from '../components/form/FormAdress'
import NavLink from '../components/navLink/NavLink';
import SvgHome from '../components/SvgHome';
import { GlobalContext } from '../context/MyContext'
import { Container } from './styled';
import iconCep from '../icons/iconCep.svg';

const FromAdress = () => {
  const { getStateList, getCountiesList, selectedState} = React.useContext(GlobalContext);
  
  React.useEffect(() => {
    // pega os estados
    getStateList()
    // pega os listaDeMunicipios
    getCountiesList('Rondônia')
  }, [selectedState])
  
  return (
    <Container>
      <ContainerHome>
      <div>
      <NavLink />
      <FormAdress />
      </div>
      <div>
        <SvgHome icon={iconCep}/>
      </div>
      </ContainerHome>
    </Container>
  )
}

export default FromAdress
