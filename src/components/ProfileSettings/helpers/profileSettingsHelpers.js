import { saveUserValue } from '../../../api/user'
import { closeDialog } from '../../Dialog/helpers/dialogHelpers'
import { checkInputValidity, hideInputError } from '../../Form/helpers/formValidation'

const getDialogInput = (dialogElement) => {
  const inputElement = dialogElement.querySelector('.form-input')

  return inputElement
}

export const saveNewValue = async (ref, username, setUser) => {
  const inputElement = getDialogInput(ref.current)
  const { name, value } = inputElement

  checkInputValidity(ref.current)
  
  if (inputElement.checkValidity()) {
    await saveUserValue(username, name, value)
      .then((result) => {
        setUser(prevValue => ({ ...prevValue, [name]: value }))

        inputElement.value = ''
        hideInputError(inputElement)
        closeDialog(ref)
        console.log(result.result)
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export const signOut = (navigate) => {
  localStorage.removeItem('chatCloneUsername')
  localStorage.removeItem('chatCloneKey')

  navigate('/user/login')
}