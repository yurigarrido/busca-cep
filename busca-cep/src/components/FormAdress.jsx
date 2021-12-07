import React from 'react'
import { GlobalContext } from '../context/MyContext'
import Button from './Button'
import Input from './Input'

const FormAdress = () => {
  const { getStateList, estados } = React.useContext(GlobalContext);

  React.useEffect(() => {
    getStateList()
  }, [])

  return (
    <>
      <form>
        <Input
          type
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
