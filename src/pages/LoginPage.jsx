import React, { useState } from 'react'

import { Form, Loading, Navbar } from '../components/components'

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <div className='page login-page'>
      <Navbar />

      <>
        {
          isLoading ?

            <Loading />

          :

            <Form legend='Sign In' type='login' setIsLoading={setIsLoading} />
        }
      </>
    </div>
  )
}

export default LoginPage