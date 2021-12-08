import React from 'react'
import FormAdress from '../components/FormAdress'
import { GlobalContext } from '../context/MyContext'

const FromAdress = () => {
  const { getStateList, getCountiesList, selectedState } = React.useContext(GlobalContext);
  
  React.useEffect(() => {
    // pega os estados
    getStateList()
    // pega os listaDeMunicipios
    getCountiesList('Rondônia')
  }, [selectedState])
  
  return (
    <div>
      <FormAdress />
    </div>
  )
}

export default FromAdress
