const createRandomMessageId = (userId) => {
  return Math.floor(Math.random() * 1000000 * userId)
}

export const createMessageObject = (messageType, messageValue, userId) => {
  const messageId = createRandomMessageId(userId)

  return {
    id: messageId,
    author: userId,
    type: messageType,
    content: messageValue,
    viewd: [userId],
  }
}

export const getCompanion = (userId, members) => {
  return members.find(memberId => parseInt(memberId) !== userId)
}

export const scrollToBottom = (ref) => {
  ref.current.scrollTop = ref.current.scrollHeight
}

export const checkUrlValidity = (url) => {
  const regex = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/

  return regex.test(url)
}