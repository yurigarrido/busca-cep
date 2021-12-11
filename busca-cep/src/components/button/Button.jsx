import React from 'react'
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../context/MyContext';
import { ButtonStyled } from './styled'

const Button = ({text, type, nextHistory, adress,  fetch, novaBusca}) => {
  const navigate = useNavigate()
  const { fetchApi, cep, setData, setDataCEP, setCep, getCEP } = React.useContext(GlobalContext)

  const handleClick =(async () => {
    if(fetch) {
      await fetchApi(cep, true)
    }
      else if(novaBusca === 'true') {
        setData('')
        setCep('')
        setDataCEP(null)
      } else if ( adress ) getCEP()
    else navigate(nextHistory)
  })

  return (
    <ButtonStyled
      type={type}
      onClick={() => handleClick()}
    >
     {text}
    </ButtonStyled>
  )
}

export default Button
