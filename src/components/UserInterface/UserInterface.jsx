import React, { useRef, useState } from 'react'

import UserInterfaceChat from './components/RightSide/UserInterfaceChat'
import UserInterfaceChatsBar from './components/LeftSide/UserInterfaceChatsBar'
import { checkUserChats } from './helpers/checkChatMembers'

import { createNewChat, getChat, sendNewMessage } from '../../api/chat'
import { createMessageObject } from './helpers/userInterfaceHelpers'

const UserInterface = ({ user, setUser }) => {

  const [currentChat, setCurrentChat] = useState(null)
  const chatSettingsRef = useRef(null)
  
  const createChat = async (id, username) => {
    const status = await checkUserChats(user.id, id, user.chats)
    if (status) {
      await createNewChat(user.username, username)
        .then(result => {
          const newChats = [...user.chats]
          newChats.push(result)
    
          setUser(prevData => ({...prevData, chats: newChats}))
          setCurrentChat(result)
        })
        .catch(error => console.log(error))
      console.log(status)
    } else {
      console.log(status)
    }
  }

  const setChat = async (chatId) => {
    await getChat(chatId)
      .then(result => {
        if (Object.keys(result).length > 0) {
          setCurrentChat(result)
        }
      })
      .catch(error => {
        console.log(error)
      })
  }

  const clearChat = () => {
    setCurrentChat(null)
  }

  const sendMessage = async (messageType, messageInputRef) => {
    const { id } = currentChat

    const messageObject = createMessageObject(messageType, messageInputRef.current.value, user.id)

    await sendNewMessage(id, messageObject)
      .then(result => {
        setCurrentChat(prevValue => ({ ...prevValue, messages: result.messages }))

        messageInputRef.current.value = ''
      })
  }

  return (
    <div className='user-interface'>
      <div className='user-interface__chat'>
        <UserInterfaceChatsBar user={user} currentChat={currentChat} createChat={createChat} setChat={setChat} />

        <UserInterfaceChat currentChat={currentChat} setCurrentChat={setCurrentChat} clearChat={clearChat} sendMessage={sendMessage} />
      </div>
    </div>
  )
}

export default UserInterface