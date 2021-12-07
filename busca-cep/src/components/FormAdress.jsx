import React from 'react'
import { GlobalContext } from '../context/MyContext'
import Button from './Button'
import Input from './Input'
import SelectMenu from './SelectMenu'

const FormAdress = () => {
  const { getStateList, estados, setSelectedState, selectedState } = React.useContext(GlobalContext);

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
        <Input />
        <Input />
      </form>
        <Button />
        <Button />
    </>
  )
}

export default FormAdress
