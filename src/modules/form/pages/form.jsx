import React from 'react'
import Login from '../components/login/login'
import Signup from '../components/signup/signup'
import Reset from '../components/resetPassword/reset'
import OTPVerification from '../components/opt/opt'
import EmailInputPage from '../components/email/email'

const Form = () => {
  return (
    <div>
      <Login />
      <Signup /> 
      <Reset />
      <OTPVerification />
      <EmailInputPage />
    </div>
  )
}

export default Form
