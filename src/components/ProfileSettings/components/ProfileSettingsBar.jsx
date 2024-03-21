import React, { useRef } from 'react'

import { IoClose } from 'react-icons/io5'

import { Avatar, Dialog, EmptyElement, ImageDialog } from '../../components'
import { openDialog, closeDialog } from '../../Dialog/helpers/dialogHelpers'

const ProfileSettingsBar = ({ name, avatar, close }) => {
  const avatarDialogRef = useRef(null)

  return (
    <div className="profile-settings__user-bar">
      <div className="profile-settings__avatar-container">
          <button className='button profile-settings__avatar-button' onClick={() => openDialog(avatarDialogRef)}>
            <Avatar imageClassName='profile-settings__avatar' url={avatar} />
          </button>
      </div>

      <span className="profile-settings__username">{name}</span>

      <button
        className="button"
        onClick={close}
      >
        <IoClose size={28} />
      </button>

      <Dialog children={ <ImageDialog imageUrl={avatar} imageAlt='avatar' close={() => closeDialog(avatarDialogRef)} /> } ref={avatarDialogRef} />
    </div>
  )
}

export default ProfileSettingsBar;
