import React from 'react'

import { Form, Navbar } from '../components/components'

const RegisterPage = () => {
  return (
    <div className='page register-page'>
      <Navbar />

      <Form legend='Sign Up' type='register' />
    </div>
  )
}

export default RegisterPage