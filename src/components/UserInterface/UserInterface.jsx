import React, { useRef, useState } from 'react'

import UserInterfaceChat from './components/RightSide/UserInterfaceChat'
import UserInterfaceChatsBar from './components/LeftSide/UserInterfaceChatsBar'
import { checkUserChats } from './helpers/checkChatMembers'

import { createNewChat, getChat, sendNewMessage } from '../../api/chat'
import { createMessageObject, getCompanion } from './helpers/userInterfaceHelpers'
import { findUserById, getUserInfo } from '../../api/user'

const UserInterface = ({ user, setUser }) => {
  const [currentChat, setCurrentChat] = useState(null)
  const [currentCompanion, setCurrentCompanion] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const chatSettingsRef = useRef(null)
  
  const createChat = async (id, username) => {
    const status = await checkUserChats(user.id, id, user.chats)
    if (status) {
      await createNewChat(user.username, username)
        .then(result => {
          const newChats = [...user.chats]
          newChats.push(result.chat)
    
          setUser(prevData => ({...prevData, chats: newChats}))
          setCurrentChat(result.chat)
          setCurrentCompanion(result.companion)
        })
        .catch(error => console.log(error))
      console.log(status)
    } else {
      console.log(status)
    }
  }

  const setChat = async (chatId) => {
    if (!currentChat) {
      setIsLoading(true)
      const companionId = await getChat(chatId)
        .then(result => {
          if (Object.keys(result).length > 0) {
            setCurrentChat(result)

            return getCompanion(user.id, result.members)
          }
        })
        .catch(error => {
          console.log(error)
        })

      await findUserById(companionId)
        .then(result => {
          setCurrentCompanion(result)
        })
        .catch(error => {
          console.log(error)
        })

      setIsLoading(false)
    }
  }

  const clearChat = () => {
    setCurrentChat(null)
    setCurrentCompanion(null)
  }

  const sendMessage = async (messageType, messageInputRef) => {
    if (messageInputRef.current.value.length > 0) {
      const { id } = currentChat

      const messageObject = createMessageObject(messageType, messageInputRef.current.value, user.id)

      await sendNewMessage(id, messageObject)
        .then(result => {
          setCurrentChat(prevValue => ({ ...prevValue, messages: result.messages }))

          messageInputRef.current.value = ''
        })
        .catch(error => {
          console.log(messageObject)
          console.log(error)
        })
      }
  }

  return (
    <div className='user-interface'>
      <div className='user-interface__chat'>
        <UserInterfaceChatsBar user={user} setUser={setUser} currentChat={currentChat} createChat={createChat} setChat={setChat} />

        <UserInterfaceChat isLoading={isLoading} user={user} companion={currentCompanion} currentChat={currentChat} setCurrentChat={setCurrentChat} clearChat={clearChat} sendMessage={sendMessage} />
      </div>
    </div>
  )
}

export default UserInterface