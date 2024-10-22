import React from 'react'
import AuthLayouts from '../components/Layouts/AuthLayouts'
import FormLogin from '../components/Fragments/FormLogin'

const Login = () => {
  return (
    <AuthLayouts title="Login" type="login">
      <FormLogin/>
    </AuthLayouts>
  )
}

export default Login