import { login, register } from '../../../api/auth'

export const typeFunction = async (type, current) => {
  const { username, password } = current

  if (type === 'login') {
    await login(username.value, password.value).then(result => console.log(result))
  }

  if (type === 'register') {
    await register(username.value, password.value).then(result => console.log(result))
  }
}