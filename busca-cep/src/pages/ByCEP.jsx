import React from 'react'
import Button from '../components/Button'
import Input from '../components/Input'
import { GlobalContext } from '../context/MyContext'

const ByCEP = () => {
  const {cep, setCep, data} = React.useContext(GlobalContext)
  console.log(data);
  return (
    <>
      <div>
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
          <Button 
            type='button' 
            text='Voltar'
            nextHistory='/'
          />
      </div>
      <div>
        { data && (
          <>
            <p>CEP: {data.cep}</p>
            <p>Cidade: {data.localidade}</p>
            <p>UF: {data.uf}</p>
            <p>Bairro: {data.bairro}</p>
          </>
          )}
      </div>
    </>
  )
}

export default ByCEP
