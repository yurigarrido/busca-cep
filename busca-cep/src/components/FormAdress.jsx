import React from 'react'
import { GlobalContext } from '../context/MyContext'
import Button from './Button'
import Input from './Input'
import SelectMenu from './SelectMenu'

const FormAdress = () => {
  const { estados, setSelectedState, listCounties, logradouro, setLogradouro, setSelectedCounti } = React.useContext(GlobalContext);

  React.useEffect(() => {
    
  }, [])

  return (
    <>
      <form>
        <p>Selecione um estado: </p>
        <SelectMenu
          listOptions={estados}
          handleChange={setSelectedState}
        />
        <p>Selecione um municipio: </p>
        <SelectMenu
          listOptions={listCounties}
          handleChange={setSelectedCounti}
        />
        <Input
          text='Logradouro:'
          type='text'
          placeholder='digite o logradouro aqui...'
          value={logradouro}
          changeStatus={setLogradouro}
        />
      </form>
        <Button 
          text='Pesquisar'
        />
        <Button
          text='Voltar'
        />
    </>
  )
}

export default FormAdress
