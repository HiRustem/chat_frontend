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

export const deleteOldChat = async (chatId) => {
  return await fetch(`${config.baseUrl}/user/chats/${chatId}`, {
    method: 'DELETE',
    headers: config.headers,
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

export const editChatValue = async (chatId, valueName, value) => {
  return await fetch(`${config.baseUrl}/user/chats/edit`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      chatId,
      valueName,
      value
    })
  })
  .then(result => {
    return checkStatus(result)
  })
}

export const editMessage = async (chatId, messageId, content) => {
  return await fetch(`${config.baseUrl}/message/edit`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      chatId,
      messageId,
      content
    })
  })
  .then(result => {
    return checkStatus(result)
  })
}

export const deleteOldMessage = async (chatId, messageId) => {
  return await fetch(`${config.baseUrl}/message/delete?chatId=${chatId}&messageId=${messageId}`, {
    method: 'DELETE',
    headers: config.headers,
  })
  .then(result => {
    return checkStatus(result)
  })
}