import React, { useState } from "react";

export const GlobalContext = React.createContext()

const MyContext = ({children}) => {
  // input cpd
  const [cep, setCep] = useState(null)
  // dados pelo cpf
  const [data, setData] = useState('')

  // estados fetch
  const [estados, setEstados] = useState(null)
  // cidade fetch
  const [selectedState, setSelectedState] = useState('RO')
  // cidade selecionada 
  const [selectedCountie, setSelectedCounti] = useState('')
  // lista de minicipios
  const [ listCounties, setListCounties] = useState([])
  // input logadouro
  const [logradouro, setLogradouro] = useState('')

  // base para pegar id
  const [ InfoLocation, setInfoLocation] = useState([])
  // id
  const [id, setId] = useState({id: 11})
  //data cep
  const [dataCEP, setDataCEP] = useState(null)


  async function fetchApi(cep, type){
    if(type) {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
      const json = await response.json();
      setData(json)
    }
  }

  async function getStateList() {
    const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados`)
    const json = await response.json();
    setInfoLocation(json)
    const estadosList = []
    json.map((item) =>  estadosList.push({nome: item.nome, sigla: item.sigla}))
    setEstados(estadosList)
  }

  async function getCountiesList(estado) {
    const nome = estado
    const info = InfoLocation.find((item) => item.sigla === nome)
    if (info) {
      setId(info)
    }
    const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${id.id}/distritos`)
    const json = await response.json();
    const listaDeMunicipios = json.map((item) => item.nome)
    listaDeMunicipios.unshift('Selecione...')
    setListCounties(listaDeMunicipios);
  }

  async function getCEP() {
    const log = logradouro;
    const sigla = selectedState;
    const nomeCidade = selectedCountie;
    const response = await fetch(`https://viacep.com.br/ws/${sigla}/${nomeCidade}/${log}/json/`);
    const json = await response.json();
    setDataCEP(json);
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
    listCounties,
    logradouro,
    setLogradouro,
    setSelectedCounti,
    selectedCountie,
    getCEP,
    dataCEP,
    setDataCEP,
  }

  return (
    <GlobalContext.Provider value={ value }>
      { children }
    </GlobalContext.Provider>
  )
}

export default MyContext
