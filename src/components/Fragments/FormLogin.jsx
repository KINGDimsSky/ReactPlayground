import React, { useRef, useEffect, useState } from 'react'
import InputForm from '../Elements/Input/InputForm'
import Button from '../Elements/Button/Button'
import { useNavigate } from 'react-router-dom'
import { login } from '../../services/auth.service'

const FormLogin = () => {
  const navigate = useNavigate();
  const [loginFailed, setLoginFailed] = useState("");

  const usernameRef = useRef(null);
  const alertRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus()
  }, [])

  useEffect(() => {
    setTimeout(() => {
      alertRef.current.style.display = 'none'
    }, 2000);
  }, [loginFailed])

  const handleClicker = (e) => {
    e.preventDefault()
    const data = {
      username: e.target.username.value,
      password: e.target.password.value
    }
    login(data, (status, res) => {
      if (status){
        localStorage.setItem('token', res);
        navigate('/products')
      }else {
        setLoginFailed(res)
      }
    });
    /* localStorage.setItem('email', e.target.email.value)
    localStorage.setItem('password', e.target.password.value)
    navigate('/products') */
  }

  return (
    <form onSubmit={handleClicker}>
      {loginFailed && (
        <h2 ref={alertRef} className='mb-3 bg-red-300 p-2 rounded-md'>{loginFailed}</h2>
      )}
    <InputForm ref={usernameRef} htmlfor="username" label="Username" type="text" placeholder="John Doe"/>
    <InputForm htmlfor="password" label="Password" type="password" placeholder="****"/>
    <Button type='submit' className="bg-blue-600 text-white w-full">Login</Button>
  </form> 
  )
}

export default FormLogin