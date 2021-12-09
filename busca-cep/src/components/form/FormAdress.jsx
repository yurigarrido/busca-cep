import React from 'react'
import { GlobalContext } from '../../context/MyContext'
import Button from '../button/Button'
import Input from './Input'
import SelectMenu from './SelectMenu'
import { FormStyled } from './styled'
import { Label } from './label'

const FormAdress = () => {
  const { estados, setSelectedState, listCounties, logradouro, setLogradouro, setSelectedCounti, data } = React.useContext(GlobalContext);

  return (
    <>
      <FormStyled>
        <Label>Selecione um estado: </Label>
        <SelectMenu
          listOptions={estados}
          handleChange={setSelectedState}
        />
        <Label>Selecione um municipio: </Label>
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
      </FormStyled>
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
