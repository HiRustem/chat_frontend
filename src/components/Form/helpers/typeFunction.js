import { login, register } from '../../../api/auth'
import { setSessionStore } from '../../../api/config'

export const typeFunction = async (type, current) => {
  const { username, password } = current

  if (type === 'login') {
    return await login(username.value, password.value)
      .then(result => {
        return setSessionStore(result)
      })
      .catch(() => { return false })
  }

  if (type === 'register') {
    return await register(username.value, password.value)
      .then(result => {
        return setSessionStore(result)
      })
      .catch(() => { return false })
  }
}