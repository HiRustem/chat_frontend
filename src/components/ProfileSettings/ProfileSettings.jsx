import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import ProfileSettingsBar from './components/ProfileSettingsBar'
import ProfileSettingsNameDialog from './components/ProfileSettingsNameDialog'

import { Dialog } from '../components'

import { closeDialog, openDialog } from '../Dialog/helpers/dialogHelpers'
import ProfileSettingsButtons from './components/ProfileSettingsButtons'
import ProfileSettingsAvatarDialog from './components/ProfileSettingsAvatarDialog'
import { saveNewValue, signOut } from './helpers/profileSettingsHelpers'

const ProfileSettings = ({ user, setUser, close }) => {
  const nameRef = useRef(null)
  const avatarRef = useRef(null)

  const navigate = useNavigate()

  const { username, name, avatar } = user
 
  return (
    <div className='profile-settings'>
      <ProfileSettingsBar name={name} avatar={avatar} close={close} />

      <ProfileSettingsButtons openNameDialog={() => openDialog(nameRef)} nameText='Edit Name' openAvatarDialog={() => openDialog(avatarRef)} avatarText='Edit Avatar' lastFunction={() => signOut(navigate)} lastText='Sign Out' />

      <Dialog ref={nameRef} children={
        <ProfileSettingsNameDialog close={() => closeDialog(nameRef)} save={() => saveNewValue(nameRef, username, setUser)} />
      } />

      <Dialog ref={avatarRef} children={
        <ProfileSettingsAvatarDialog close={() => closeDialog(avatarRef)} save={() => saveNewValue(avatarRef, username, setUser)} />
      } />
    </div>
  )
}

export default ProfileSettings