import React from 'react'
import { GlobalContext } from '../../context/MyContext'
import Button from '../button/Button'
import Input from './Input'
import SelectMenu from './SelectMenu'
import { FormStyled } from './styled'
import { Label } from './label'
import { ResponseCEP } from '../styledResponse'

const FormAdress = () => {
  const {
    estados,
    dataCEP,
    setSelectedState,
    listCounties,
    logradouro,
    setLogradouro,
    setSelectedCounti,
    error,
  } = React.useContext(GlobalContext);

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
        { error && <Label>Há um erro no preenchimento dos campos, favor verficar.</Label>}
        <Button 
          text='Pesquisar'
          adress
        />
        <Button
          text='Voltar'
          nextHistory='/'
        />
        { dataCEP && (
          <>
            <Button 
              text='Nova Busca'
              type='button'
              novaBusca='true'
            />
            <ResponseCEP> CEP: {dataCEP[0].cep}</ResponseCEP>
          </>
          )}
    </>
  )
}

export default FormAdress
