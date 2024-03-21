import { getChat } from '../../../api/chat'

const checkMembers = (userId, members) => {
  for (let memberId of members) {
    if (memberId == userId) {
      return false
    }
  }

  return true
}

const checkChatMembers = (userId, chat) => {
  if (Object.keys(chat).length !== 0) {
    return checkMembers(userId, chat.members)
  }

  return false
}

export const checkUserChats = async (userId, id, chats) => {
  let result = true

  if (userId === id) {
    return false
  }

  if (chats.length === 0) {
    return true
  }

  for (let chatId of chats) {
    const chat = await getChat(chatId)
    .then(result => { return result })
    .catch(error => console.log(error))
  
      
    if (!checkChatMembers(id, chat)) {
      result = false
    }
  }

  return result
}