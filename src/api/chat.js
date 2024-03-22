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

export const createNewChat = async (firstUsername, secondUsername) => {
  return await fetch(`${config.baseUrl}/user/chats`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      firstUsername,
      secondUsername,
    })
  })
  .then(result => {
    return checkStatus(result)
  })
}

export const sendNewMessage = async (chatId, message) => {
  return await fetch(`${config.baseUrl}/message/send`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      chatId,
      message,
    })
  })
  .then(result => {
    return checkStatus(result)
  })
}

export const getNewMessages = async (chatId) => {
  return await fetch(`${config.baseUrl}/message/${chatId}`, {
    headers: config.headers,
  })
  .then(result => {
    return checkStatus(result)
  })
}