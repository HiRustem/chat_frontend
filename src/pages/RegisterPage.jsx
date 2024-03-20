import React, { useState } from 'react'

import { Form, Loading, Navbar } from '../components/components'

const RegisterPage = () => {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <div className='page register-page'>
      <Navbar />

      <>
        {
          isLoading ?

            <Loading />

          :

            <Form legend='Sign Up' type='register' setIsLoading={setIsLoading} />
        }
      </>
    </div>
  )
}

export default RegisterPage