import React from 'react'

const Input = ({type, placeholder, changeStatus, text, value, isRequired, max}) => {

  {(value && value.length >= 9) && alert('ja chega')}

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
