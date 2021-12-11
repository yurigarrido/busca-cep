import React from 'react'
import { InputStyled } from './input'
import { Label } from './label'

const Input = ({type, placeholder, changeStatus, text, value}) => {

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
      />
    </>
  )
}

export default Input
