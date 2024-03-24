import React, { useRef, useState } from 'react'

import UserInterfaceChat from './components/RightSide/UserInterfaceChat'
import UserInterfaceChatsBar from './components/LeftSide/UserInterfaceChatsBar'
import { checkUserChats } from './helpers/checkChatMembers'

import { createChatFunction, sendNewMessageFunction, setCurrentChatFunction } from './helpers/userInterfaceFunctions'

const UserInterface = ({ user, setUser }) => {
  const [currentChat, setCurrentChat] = useState(null)
  const [currentCompanion, setCurrentCompanion] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  
  const createChat = async (id, username) => {
    await checkUserChats(user.id, id, user.chats)
      .then(async () => {
        await createChatFunction(user, username, setUser, setCurrentChat, setCurrentCompanion)
      })
      .catch(error => console.log(error))
  }

  const setChat = async (chatId) => {
    if (!currentChat || currentChat.id !== chatId) {
      setIsLoading(true)
      
      await setCurrentChatFunction(chatId, user, setCurrentChat, setCurrentCompanion)

      setIsLoading(false)
    }
  }

  const clearChat = () => {
    setCurrentChat(null)
    setCurrentCompanion(null)
  }

  const sendMessage = async (messageType, messageInputRef) => {
    if (messageInputRef.current.value.length > 0) {
      await sendNewMessageFunction(currentChat.id, messageType, messageInputRef, user, setCurrentChat)
    }
  }

  return (
    <div className='user-interface'>
      <div className='user-interface__chat'>
        <UserInterfaceChatsBar user={user} currentChat={currentChat} createChat={createChat} setChat={setChat} />

        <UserInterfaceChat isLoading={isLoading} user={user} setUser={setUser} companion={currentCompanion} currentChat={currentChat} setCurrentChat={setCurrentChat} clearChat={clearChat} sendMessage={sendMessage} />
      </div>
    </div>
  )
}

export default UserInterface