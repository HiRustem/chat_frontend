const checkMembers = (userId, members) => {
  for (let memberId of members) {
    if (memberId == userId) {
      return false
    }
  }

  return true
}

export const checkChatMembers = (userId, chat) => {
  if (Object.keys(chat).length !== 0) {
    return checkMembers(userId, chat.members)
  }

  return false
}