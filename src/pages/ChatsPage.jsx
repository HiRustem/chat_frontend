import React, { useEffect, useRef, useState } from 'react'

import { Dialog, Loading, Navbar, ProfileSettings } from '../components/components'

import { getUserInfo } from '../api/user'

import { closeDialog, openDialog } from '../components/Dialog/helpers/dialogHelpers'

const ChatsPage = () => {
  const settingsRef = useRef(null)
  const [user, setUser] = useState(null)

  useEffect(() => {
    async function getUserData() {
      const username = localStorage.getItem('chatCloneUsername')
      const key = localStorage.getItem('chatCloneKey')

      if (username && key) {
        const response = await getUserInfo(username, key)

        setUser(response.result)
      }
    }

    getUserData()
  }, [])

  return (
    <div className='page login-page'>
      {
        user ?

          <>
            <Navbar profileInfo={{username: user.username, avatar: user.avatar}} openDialog={() => openDialog(settingsRef)} />

            <Dialog ref={settingsRef} children={ <ProfileSettings user={user} setUser={setUser} close={() => closeDialog(settingsRef)} /> } />
          </>

        :

          <Loading />
      }
    </div>
  )
}

export default ChatsPage