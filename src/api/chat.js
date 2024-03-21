import { checkStatus, config } from './config'

export const getChat = async (chatId) => {
  return await fetch(`${config.baseUrl}/user/chats/get/${chatId}`, {
    headers: config.headers
  })
  .then(result => {
    if (result.ok) {
      return result.json()
    }
  
    return Promise.reject(`Ошибка ${result.status}`)
  })
}

export const createChat = async (firstUsername, secondUsername) => {
  return await fetch(`${config.baseUrl}/user/chats`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      firstUsername,
      secondUsername
    })
    .then(result => {
      return checkStatus(result)
    })
  })
}