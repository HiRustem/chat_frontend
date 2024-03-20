import React, { Fragment, useRef } from 'react'
import FormInput from './components/FormInput'

import { formValidation, hasInvalid } from './helpers/formValidation'
import { login } from '../../api/auth'
import { typeFunction } from './helpers/typeFunction'

const Form = ({ legend, type }) => {
  const formRef = useRef(null)

  const onSubmit = async (event) => {
    event.preventDefault()

    const { current } = formRef

    formValidation(event.target)

    if (hasInvalid(current)) {
      await typeFunction(type, current)
    }
  }

  return (
    <form className='form' ref={formRef} onSubmit={onSubmit} noValidate>
      <fieldset className='form__fieldset'>
        <legend className='form__legend'>{legend}</legend>

        <FormInput name='username' type='text' text='Username' minlength='4' maxlength='20' pattern='^[a-zA-Z0-9]*$' missError='you missed this field' lengthError='minimum number of characters: 4' patternError='only Latin letters and numbers are allowed' />

        <FormInput name='password' type='password' text='Password' minlength='6' maxlength='20' pattern='^[a-zA-Z0-9]*$' missError='you missed this field' lengthError='minimum number of characters: 6' patternError='only Latin letters and numbers are allowed' />


        <button className='form__button' type='submit'>{type === 'login' ? 'Sign In' : 'Sign Up'}</button>
      </fieldset>
    </form>
  )
}

export default Form