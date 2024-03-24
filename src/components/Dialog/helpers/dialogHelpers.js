import { getDialogInput } from '../../ProfileSettings/helpers/profileSettingsHelpers'

export const openDialog = (ref) => {
  ref.current.showModal()
}

export const closeDialog = (ref) => {
  const inputElement = getDialogInput(ref.current)

  if (inputElement) {
    inputElement.value = ''
  }

  ref.current.close()
}