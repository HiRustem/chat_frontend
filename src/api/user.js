import { checkStatus, config } from './config'

export const getUserInfo = async (username, key) => {
  return await fetch(`${config.baseUrl}/user/chats?username=${username}&key=${key}`, {
    headers: config.headers
  })
  .then(result => {
    return checkStatus(result)
  })
}