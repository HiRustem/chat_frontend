import React, { useEffect, useRef, useState } from 'react'

import { Dialog, Loading, Navbar, ProfileSettings, UserInterface } from '../components/components'

import { getUserInfo } from '../api/user'

import { closeDialog, openDialog } from '../components/Dialog/helpers/dialogHelpers'
import { useNavigate } from 'react-router-dom'

const ChatsPage = () => {
  const userSettingsRef = useRef(null)
  const navigate = useNavigate()
  const [user, setUser] = useState(null)

  useEffect(() => {
    async function getUserData() {
      const username = localStorage.getItem('chatCloneUsername')
      const key = localStorage.getItem('chatCloneKey')

      if (username && key) {
        const response = await getUserInfo(username, key)

        setUser(response.result)
      } else {
        navigate('/user/login')
      }
    }

    getUserData()
  }, [])

  return (
    <div className='page login-page'>
      {
        user ?

          <>
            <Navbar profileInfo={{name: user.name, avatar: user.avatar}} openDialog={() => openDialog(userSettingsRef)} />

            <UserInterface user={user} setUser={setUser} />

            <Dialog ref={userSettingsRef} children={ <ProfileSettings user={user} setUser={setUser} close={() => closeDialog(userSettingsRef)} /> } />
          </>

        :

          <Loading />
      }
    </div>
  )
}

export default ChatsPage