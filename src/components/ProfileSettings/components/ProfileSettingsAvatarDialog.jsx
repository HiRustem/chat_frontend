import React from 'react'

import { IoClose } from 'react-icons/io5'

import FormInput from '../../Form/components/FormInput'

const ProfileSettingsAvatarDialog = ({ close, save }) => {
  return (
    <div className='profile-settings-dialog'>
      <button className='button profile-settings-dialog__button' onClick={close}>
        <IoClose size={28} />
      </button>

      <FormInput name='avatar' type='url' text='Url' minlength='4' maxlength='100' pattern="^(ftp|https?):\/\/[^ ']+$" missError='you missed this field' lengthError='minimum number of characters: 4' patternError='enter the link' />

      <button className='form__button' onClick={save}>Save</button>
    </div>
  )
}

export default ProfileSettingsAvatarDialog