import React from 'react'

import { Form, Navbar } from '../components/components'

const LoginPage = () => {
  return (
    <div className='page login-page'>
      <Navbar />

      <Form legend='Sign In' type='login' />
    </div>
  )
}

export default LoginPage