import React from 'react'

const FormInput = ({ name, type, text, minlength, maxlength, pattern, missError, lengthError, patternError }) => {
  return (
    <div className='form-input-container'>
      <input className='form-input' name={name} type={type} required min={minlength} max={maxlength} pattern={pattern} data-miss-error={missError} data-length-error={lengthError} data-pattern-error={patternError} placeholder='' />

      <span className='form-input__error-message'></span>

      <label className='form-input__label'>{text}</label>
    </div>
  )
}

export default FormInput