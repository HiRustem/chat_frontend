import React, { useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

import { Navbar, Hello } from '../components/components'

const StartPage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const username = localStorage.getItem('chatCloneUsername')
    const key = localStorage.getItem('chatCloneKey')

    console.log(username, key)

    if (username && key) {
      navigate('/chats')
    }
  }, [])

  return (
    <div className='page start-page'>
      <Navbar />

      <Hello />
    </div>
  );
};

export default StartPage;
