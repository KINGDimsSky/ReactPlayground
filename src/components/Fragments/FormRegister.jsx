import React from 'react'
import InputForm from '../Elements/Input/InputForm'
import Button from '../Elements/Button/Button'

const FormRegister = () => {
  return (
    <form action="">
    <InputForm htmlfor="fullname" label="Fullname" type="text" placeholder="insert your name here.."/>
    <InputForm htmlfor="email" label="Email" type="email" placeholder="example@mail.com"/>
    <InputForm htmlfor="password" label="Password" type="password" placeholder="****"/>
    <InputForm htmlfor="confirmPassword" label="Confirm Password" type="password" placeholder="****"/>
    <Button className="bg-blue-600 text-white w-full">Register</Button>
  </form>
  )
}

export default FormRegister