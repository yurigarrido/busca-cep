import React, { useState } from "react";

export const GlobalContext = React.createContext()

const MyContext = ({children}) => {
  const [cep, setCep] = useState(null)
  const [data, setData] = useState('')
  const [estados, setEstados] = useState(null)
  const [selectedState, setSelectedState] = useState('Santa Catarina')

  async function fetchApi(cep, type){
    if(type) {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
      // console.log(response);
      const json = await response.json();
      setData(json)
    }
  }

  async function getStateList() {
    const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados`)
    const json = await response.json();
    const estadosList = json.map((item) => item.nome)
    setEstados(estadosList)
  }

  const value = {
    cep,
    setCep,
    fetchApi,
    data,
    setData,
    estados,
    selectedState,
    setSelectedState,
    getStateList,
  }

  return (
    <GlobalContext.Provider value={ value }>
      { children }
    </GlobalContext.Provider>
  )
}

export default MyContext
