import { config, checkStatus } from './config'

export const login = async (username, password) => {
  return await fetch(`${config.baseUrl}/user/login?username=${username}&password=${password}`, {
    headers: config.headers
  })
  .then(result => {
    return checkStatus(result)
  })
}

export const register = async (username, password) => {
  return await fetch(`${config.baseUrl}/user/register`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      username,
      password,
    })
  })
  .then(result => {
    return checkStatus(result)
  })
}