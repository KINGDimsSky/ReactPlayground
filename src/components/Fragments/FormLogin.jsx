import React, { useRef, useEffect } from 'react'
import InputForm from '../Elements/Input/InputForm'
import Button from '../Elements/Button/Button'
import { useNavigate } from 'react-router-dom'

const FormLogin = () => {
  const navigate = useNavigate();

  const misaleTest = useRef(null);

  useEffect(() => {
    misaleTest.current.focus()
  }, [])

  const handleClicker = (e) => {
    e.preventDefault()
    localStorage.setItem('email', e.target.email.value)
    localStorage.setItem('password', e.target.password.value)
    navigate('/products')
  }

  return (
    <form onSubmit={handleClicker}>
    <InputForm ref={misaleTest} htmlfor="email" label="Email" type="email" placeholder="example@mail.com"/>
    <InputForm htmlfor="password" label="Password" type="password" placeholder="****"/>
    <Button type='submit' className="bg-blue-600 text-white w-full">Login</Button>
  </form> 
  )
}

export default FormLogin