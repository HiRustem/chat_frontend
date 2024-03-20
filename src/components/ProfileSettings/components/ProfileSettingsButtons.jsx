import React from 'react'

const ProfileSettingsButtons = ({ openNameDialog, openAvatarDialog }) => {
  return (
    <div className='profile-settings__buttons'>
      <button className='form__button profile-settings__button' onClick={openNameDialog}>Edit Name</button>

      <button className='form__button profile-settings__button' onClick={openAvatarDialog}>Edit Avatar</button>
    </div>
  )
}

export default ProfileSettingsButtons