import React from 'react'
import Label from './Label'
import Input from './Input'

const InputForm = ({label, type, htmlfor, placeholder}) => {
  return (
    <div className="mb-6">
    <Label htmlfor={htmlfor}>{label}</Label>
    <Input type={type} name={htmlfor} placeholder={placeholder}/>
    </div>
  )
}

export default InputForm