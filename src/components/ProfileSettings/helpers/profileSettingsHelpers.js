import { saveUserValue } from '../../../api/user'

export const saveNewValue = (ref, setUser) => {
  const { name, value } = ref.current

  const result = ''

  saveUserValue()

  setUser(prevValue => ({ ...prevValue, [name]: result }))
}