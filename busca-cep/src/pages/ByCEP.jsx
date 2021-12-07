import React from 'react'
import Button from '../components/Button'
import Input from '../components/Input'
import { GlobalContext } from '../context/MyContext'

const ByCEP = () => {
  const {cep, setCep, data} = React.useContext(GlobalContext)
  console.log(data);
  return (
    <>
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
    </>
  )
}

export default ByCEP
