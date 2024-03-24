import { getChat, getNewMessages, sendNewMessage } from '../../../api/chat'
import { findUserById, findUserByUsername } from '../../../api/user'
import { createMessageObject, getCompanion } from './userInterfaceHelpers'

export const createChatFunction = async (user, username, setUser, setCurrentChat, setCurrentCompanion) => {
  await createNewChat(user.username, username)
    .then(result => {
      const newChats = [...user.chats]
      newChats.push(result.chat)
    
      setUser(prevData => ({...prevData, chats: newChats}))
      setCurrentChat(result.chat)
      setCurrentCompanion(result.companion)
    })
    .catch(error => console.log(error))
}

export const setCurrentChatFunction = async (chatId, user, setCurrentChat, setCurrentCompanion) => {
  await getChat(chatId)
    .then(result => {
      if (Object.keys(result).length > 0) {
        setCurrentChat(result)

        return getCompanion(user.id, result.members)
      }
    })
    .then(async (companionId) => {
      await findUserById(companionId)
      .then(result => {
        setCurrentCompanion(result)
      })
      .catch(error => {
        console.log(error)
      })
    })
    .catch(error => {
      console.log(error)
    })
}

export const sendNewMessageFunction = async (currentChatId, messageType, messageRef, user, setCurrentChat) => {
  const messageObject = createMessageObject(messageType, messageRef.current.value, user.id)

  await sendNewMessage(currentChatId, messageObject)
    .then(result => {
      setCurrentChat(prevValue => ({ ...prevValue, messages: result.messages }))

      messageRef.current.value = ''
    })
    .catch(error => {
      console.log(error)
    })
}

export const getChatsData = async (chats, setChatsArray) => {
  const newChats = []

  for (let chatId of chats) {
    await getChat(chatId)
      .then(result => {
        if (Object.keys(result).length > 0) {
          newChats.push(result)
        }
      })
      .catch(error => console.log(error))
  }

  setChatsArray(newChats)
}

export const getChats = async (user, chats, setChatsArray) => {
  await findUserById(user.id)
    .then(async (result) => {
      if (result.chats.length !== chats.length) {
        await getChatsData(result.chats, setChatsArray)
      }
    })
}

export const searchFunction = async (searchQuery, setResultArray) => {
  await findUserByUsername(searchQuery)
    .then(result => {
      if (Array.isArray(result) && result.length > 0) {
        setResultArray(result)
      } else {
        setResultArray([])
      }
    })
    .catch(error => console.log(error))
}

export const getMessagesFunction = async (currentChat, setCurrentChat) => {
  await getNewMessages(currentChat.id)
    .then(result => {
      if (currentChat.messages.length !== result.length) {
        setCurrentChat(prevValue => ({ ...prevValue, messages: result }))
      }
    })
}

export const saveNewChatName = async () => {

}

export const saveNewChatAvatar = async () => {

}