import React, { useState } from "react";

export const GlobalContext = React.createContext()

const MyContext = ({children}) => {
  const [cep, setCep] = useState(null)
  const [data, setData] = useState('')

  async function fetchApi(cep, type){
    if(type) {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
      // console.log(response);
      const json = await response.json();
      setData(json)
    }
  }

  const value = {
    cep,
    setCep,
    fetchApi,
    data,
    setData
  }

  return (
    <GlobalContext.Provider value={ value }>
      { children }
    </GlobalContext.Provider>
  )
}

export default MyContext
