import React from 'react'
import { GlobalContext } from '../context/MyContext'
import Button from './Button'
import Input from './Input'
import SelectMenu from './SelectMenu'

const FormAdress = () => {
  const { getStateList, estados, setSelectedState, selectedState, listCounties } = React.useContext(GlobalContext);

  console.log(listCounties);

  React.useEffect(() => {
    getStateList()
  }, [selectedState])

  return (
    <>
      <form>
        <SelectMenu
          listOptions={estados}
          handleChange={setSelectedState}
        />
        <SelectMenu
          listOptions={listCounties}
          handleChange={setSelectedState}
        />
      </form>
        <Button />
        <Button />
    </>
  )
}

export default FormAdress
