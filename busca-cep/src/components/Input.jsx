import React from 'react'

const Input = ({type, placeholder, changeStatus, text, value, isRequired}) => {

  return (
    <>
    <label> {text}
      <input
      type={ type }
      value ={ value }
      placeholder={ placeholder }
      onChange={({target}) => changeStatus(target.value) }
      required={ isRequired }
      />
    </label>
    </>
    
  )
}

export default Input
