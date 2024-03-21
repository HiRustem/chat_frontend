import React from 'react'

import { IoClose } from 'react-icons/io5'

import FormInput from '../../Form/components/FormInput'

const ProfileSettingsNameDialog = ({ close, save }) => {
  return (
    <div className='profile-settings-dialog'>
      <button className='button profile-settings-dialog__button' onClick={close}>
        <IoClose size={28} />
      </button>

      <FormInput name='name' type='text' text='Name' minlength='4' maxlength='20' pattern='^[a-zA-Z0-9]*$' missError='you missed this field' lengthError='minimum number of characters: 4' patternError='only Latin letters and numbers are allowed' />

      <button className='form__button' onClick={save}>Save</button>
    </div>
  )
}

export default ProfileSettingsNameDialog