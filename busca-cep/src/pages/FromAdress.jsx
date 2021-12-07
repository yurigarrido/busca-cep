import React from 'react'
import FormAdress from '../components/FormAdress'
import { GlobalContext } from '../context/MyContext'

const FromAdress = () => {
  const { getStateList, getCountiesList, id, selectedState } = React.useContext(GlobalContext)

  React.useEffect(() => {
    getStateList()
    getCountiesList()
  }, [selectedState])

  return (
    <div>
      <FormAdress />
    </div>
  )
}

export default FromAdress
