import React from 'react'
import { GlobalContext } from '../context/MyContext'

const SelectMenu = ({ listOptions, handleChange }) => {
  const {getCountiesList} = React.useContext(GlobalContext)

  function handleOnChange({target}) {
    handleChange(target.value)
    getCountiesList(target.value)
  }

  return (
    <div>
      <select onChange={(e)=> handleOnChange(e)}>
        {listOptions && listOptions.map((option, index) => 

          <option  key={index}value={option.sigla ? option.sigla : option}>{option.nome ? option.nome : option}</option>
        )}
      </select>
    </div>
  )
}

export default SelectMenu
