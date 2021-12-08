import React from 'react'
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../context/MyContext';

const Button = ({text, type, nextHistory, adress,  fetch, novaBusca}) => {
  const navigate = useNavigate()
  const { fetchApi, cep, setData, setCep, getCEP } = React.useContext(GlobalContext)

  const handleClick =(async () => {
    if(fetch) await fetchApi(cep, true)
      else if(novaBusca === 'true') {
        setData('')
        setCep('')
      } else if ( adress ) getCEP()
    else navigate(nextHistory)
  })

  return (
    <button
      type={type}
      onClick={() => handleClick()}
    >
     {text}
    </button>
  )
}

export default Button
