import React from 'react'
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../context/MyContext';

const Button = ({text, type, nextHistory, fetch}) => {
  const navigate = useNavigate()
  const { fetchApi, cep } = React.useContext(GlobalContext)

  const handleClick =(async () => {
    if(fetch) await fetchApi(cep, true)
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
