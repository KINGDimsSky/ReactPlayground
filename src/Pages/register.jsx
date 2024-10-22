import React from 'react'
import AuthLayouts from '../components/Layouts/AuthLayouts'
import FormRegister from '../components/Fragments/FormRegister'

const Register = () => {
  return (  
    <AuthLayouts title="Register" type="register">
    <FormRegister/>
    </AuthLayouts>   
  )
}

export default Register