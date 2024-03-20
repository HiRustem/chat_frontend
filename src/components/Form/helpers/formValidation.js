const showInputError = (errorElement, message) => {
  errorElement.textContent = message
  errorElement.classList.add('form-input__error-message_active')
}

const hideInputError = (errorElement) => {
  errorElement.textContent = ''
  errorElement.classList.remove('form-input__error-message_active')
}

const checkValidity = (input) => {
  const inputElement = input.querySelector('.form-input')
  const errorElement = input.querySelector('.form-input__error-message')

  const { validity, dataset } = inputElement

  if (validity.patternMismatch) {
    showInputError(errorElement, dataset.patternError)
  } else if (validity.tooShort) {
    showInputError(errorElement, dataset.lengthError)
  } else if (validity.valueMissing) {
    showInputError(errorElement, dataset.missError)
  } else {
    hideInputError(errorElement)
  }
}

export const formValidation = (target) => {
  const inputs = target.querySelectorAll('.form-input-container')
  
  for(let input of inputs) {
    checkValidity(input)
  }
}

export const hasInvalid = (current) => {
  return current.username.checkValidity() && current.password.checkValidity()
}