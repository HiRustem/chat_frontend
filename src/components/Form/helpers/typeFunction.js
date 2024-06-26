import { login, register } from '../../../api/auth'
import { setSessionStore } from '../../../api/config'

export const typeFunction = async (type, current) => {
  const { username, password } = current

  if (type === 'login') {
    return await login(username.value, password.value)
      .then(result => {
        return setSessionStore(result.result.username, result.result.key)
      })
      .catch(() => { return false })
  }

  if (type === 'register') {
    return await register(username.value, password.value)
      .then(result => {
        console.log(result)
        return setSessionStore(result.username, result.key)
      })
      .catch(() => { return false })
  }
}