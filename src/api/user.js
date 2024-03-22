import { checkStatus, config } from './config'

export const getUserInfo = async (username, key) => {
  return await fetch(`${config.baseUrl}/user/chats?username=${username}&key=${key}`, {
    headers: config.headers
  })
  .then(result => {
    return checkStatus(result)
  })
}

export const saveUserValue = async (username, valueName, value) => {
  return await fetch(`${config.baseUrl}/user/chats`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      username,
      valueName,
      value,
    })
  })
  .then(result => {
    return checkStatus(result)
  })
}

export const findUserByUsername = async (username) => {
  return await fetch(`${config.baseUrl}/user/find/${username}`, {
    headers: config.headers,
  })
  .then(result => {
    return checkStatus(result)
  })
}

export const findUserById = async (id) => {
  return await fetch(`${config.baseUrl}/user/get/${id}`, {
    headers: config.headers,
  })
  .then(result => {
    return checkStatus(result)
  })
}