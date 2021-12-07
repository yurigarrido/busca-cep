import React from 'react'

const SelectMenu = ({ listOptions, handleChange }) => {

  return (
    <div>
      <select onChange={({target})=> handleChange(target.value)}>
        {listOptions && listOptions.map((option, index) => 
          <option key={index}value={option}>{option}</option>
        )}
      </select>
    </div>
  )
}

export default SelectMenu
