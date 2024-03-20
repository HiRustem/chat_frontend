import React, { Suspense, useEffect, useState } from 'react'
import { Loading, Navbar } from '../components/components'
import { getUserInfo } from '../api/user'

const ChatsPage = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    async function getUserData() {
      const response = await getUserInfo(localStorage.getItem('chatCloneUsername'), localStorage.getItem('chatCloneKey'))

      setUser(response.result)
    }

    getUserData()
  }, [])

  return (
    <div className='page login-page'>
      {
        user ?

          <>
            <Navbar profileInfo={{username: user.username, avatar: user.avatar}} />
          </>

        :

          <Loading />
      }
    </div>
  )
}

export default ChatsPage