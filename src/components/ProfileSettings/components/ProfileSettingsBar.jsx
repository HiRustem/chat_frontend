import React from 'react'

import { IoClose } from 'react-icons/io5'

import { EmptyElement } from '../../components'

const ProfileSettingsBar = ({ name, avatar, closeDialog }) => {
  return (
    <div className="profile-settings__user-bar">
      <div className="profile-settings__avatar-container">
        {
          avatar !== "" ? (
            <img className="profile-settings__avatar" src={avatar} alt="avatar" />
          ) : (
            <EmptyElement />
          )}
      </div>

      <span className="profile-settings__username">{name}</span>

      <button
        className="button"
        onClick={closeDialog}
      >
        <IoClose size={28} />
      </button>
    </div>
  )
}

export default ProfileSettingsBar;
