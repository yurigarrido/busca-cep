import React from 'react'
import { GlobalContext } from '../context/MyContext'
import Button from './Button'
import Input from './Input'
import SelectMenu from './SelectMenu'

const FormAdress = () => {
  const { estados, setSelectedState, listCounties, logradouro, setLogradouro, setSelectedCounti, data } = React.useContext(GlobalContext);

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
          adress
        />
        <Button
          text='Voltar'
          nextHistory='/'
        />
        <div>
        { data && (
          <>

            <p>{data[0].cep}</p>
            <Button 
              text='Nova Busca'
              type='button'
              novaBusca='true'
            />
          </>
          )}
      </div>
    </>
  )
}

export default FormAdress
