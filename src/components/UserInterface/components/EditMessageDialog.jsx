import React from 'react'
import FormInput from '../../Form/components/FormInput'
import { IoClose } from 'react-icons/io5'

const EditMessageDialog = ({ close, save }) => {
  return (
    <div className='profile-settings-dialog'>
      <button className='button profile-settings-dialog__button' onClick={close}>
        <IoClose size={28} />
      </button>

      <FormInput name='messsage' type='text' text='Edit Message' minlength='4' maxlength='20' missError='you missed this field' lengthError='minimum number of characters: 4' patternError='only Latin letters and numbers are allowed' />

      <button className='form__button' onClick={save}>Save</button>
    </div>
  )
}

export default EditMessageDialog