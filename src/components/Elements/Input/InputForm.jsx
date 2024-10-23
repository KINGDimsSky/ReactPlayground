import React, { forwardRef } from "react";
import Label from './Label'
import Input from './Input'

const InputForm = forwardRef(({label, type, htmlfor, placeholder}, ref) => {
  return (
    <div className="mb-6">
    <Label htmlfor={htmlfor}>{label}</Label>
    <Input ref={ref} type={type} name={htmlfor} placeholder={placeholder}/>
    </div>
  )
})

export default InputForm