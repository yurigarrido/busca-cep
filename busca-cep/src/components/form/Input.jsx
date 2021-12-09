import React from 'react'
import { InputStyled } from './input'
import { Label } from './label'

const Input = ({type, placeholder, changeStatus, text, value, isRequired}) => {

  return (
    <>
    <Label> 
      {text}
    </Label>
      <InputStyled
      type={ type }
      value ={ value }
      placeholder={ placeholder }
      onChange={({target}) => changeStatus(target.value) }
      required={ isRequired }
      />
    </>
  )
}

export default Input
