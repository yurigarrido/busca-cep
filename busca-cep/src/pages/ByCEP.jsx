import React from 'react'
import Button from '../components/Button'
import Input from '../components/Input'
import { GlobalContext } from '../context/MyContext'

const ByCEP = () => {
  const {cep, setCep, data} = React.useContext(GlobalContext)
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
            <span>CEP:</span>
            <p>{data.cep}</p>
            <span>Cidade:</span>
            <p>{data.localidade}</p>
            <span>UF:</span>
            <p>{data.uf}</p>
            <span>Bairro: </span>
            <p>{data.bairro}</p>
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

export default ByCEP
