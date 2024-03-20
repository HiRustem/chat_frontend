import React, { useRef } from 'react'

import ProfileSettingsBar from './components/ProfileSettingsBar'
import ProfileSettingsNameDialog from './components/ProfileSettingsNameDialog'

import { Dialog } from '../components'

import { closeDialog, openDialog } from '../Dialog/helpers/dialogHelpers'
import ProfileSettingsButtons from './components/ProfileSettingsButtons'
import ProfileSettingsAvatarDialog from './components/ProfileSettingsAvatarDialog'
import { saveNewValue } from './helpers/profileSettingsHelpers'

const ProfileSettings = ({ user, setUser, close }) => {
  const nameRef = useRef(null)
  const avatarRef = useRef(null)

  const { username, avatar, key } = user

  return (
    <div className='profile-settings'>
      <ProfileSettingsBar username={username} avatar={avatar} closeDialog={close} />

      <ProfileSettingsButtons openNameDialog={() => openDialog(nameRef)} openAvatarDialog={() => openDialog(avatarRef)} />

      <Dialog ref={nameRef} children={
        <ProfileSettingsNameDialog close={() => closeDialog(nameRef)} save={() => saveNewValue(nameRef, setUser)} />
      } />

      <Dialog ref={avatarRef} children={
        <ProfileSettingsAvatarDialog close={() => closeDialog(avatarRef)} save={() => saveNewValue(avatarRef, setUser)} />
      } />
    </div>
  )
}

export default ProfileSettings