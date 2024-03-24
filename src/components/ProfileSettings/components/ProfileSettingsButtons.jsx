import React from 'react'

const ProfileSettingsButtons = ({ openNameDialog, nameText, openAvatarDialog, avatarText, lastFunction, lastText }) => {
  return (
    <div className='profile-settings__buttons'>
      <button className='form__button profile-settings__button' onClick={openNameDialog}>{nameText}</button>

      <button className='form__button profile-settings__button' onClick={openAvatarDialog}>{avatarText}</button>

      <button className='form__button profile-settings__button' onClick={lastFunction}>{lastText}</button>
    </div>
  )
}

export default ProfileSettingsButtons