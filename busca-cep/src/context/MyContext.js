import React, { useState } from "react";

export const GlobalContext = React.createContext()

const MyContext = ({children}) => {
  const [cep, setCep] = useState(null)
  const [data, setData] = useState('')
  const [estados, setEstados] = useState(null)
  const [selectedState, setSelectedState] = useState('Rondônia')
  const [ listCounties, setListCounties] = useState([])
  const [ InfoLocation, setInfoLocation] = useState([])

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
    const estadosList = json.map((item) =>  item.nome)
    setEstados(estadosList)
    setInfoLocation(json)
  }

  async function getCountiesList(estado) {
     const nome = estado;
     const id = InfoLocation.find(item => item.nome === nome)
     console.log(id);

     const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${id.id}/distritos`)
    const json = await response.json();
    setListCounties(json.map((item, i) => item.nome));
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
    getCountiesList,
    listCounties
  }

  return (
    <GlobalContext.Provider value={ value }>
      { children }
    </GlobalContext.Provider>
  )
}

export default MyContext
