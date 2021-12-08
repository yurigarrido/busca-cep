import React from 'react'
import FormAdress from '../components/FormAdress'
import NavLink from '../components/NavLink';
import { GlobalContext } from '../context/MyContext'

const FromAdress = () => {
  const { getStateList, getCountiesList, selectedState, setSelectedCounti, listCounties } = React.useContext(GlobalContext);
  
  React.useEffect(() => {
    // pega os estados
    getStateList()
    // pega os listaDeMunicipios
    getCountiesList('Rondônia')
  }, [selectedState])
  
  return (
    <div>
      <NavLink />
      <FormAdress />
    </div>
  )
}

export default FromAdress
