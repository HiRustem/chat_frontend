import React, { useEffect, useRef, useState } from 'react'
import UserInterfaceChatMessagesCard from './UserInterfaceChatMessagesCard'
import { scrollToBottom } from '../../helpers/userInterfaceHelpers'

const UserInterfaceChatMessages = ({ user, companion, currentChat, setCurrentChat }) => {
  const chatRef = useRef(null)

  const { messages } = currentChat

  useEffect(() => {
    if (messages.length > 0 && chatRef) {
      setTimeout(() => scrollToBottom(chatRef), 100)
    }
  }, [currentChat, chatRef, messages])
  
  return (
    <>
      {
        messages.length > 0 ?

          <ul className='user-interface-chat__messages' ref={chatRef}>
            {
              messages.map(message => (
                <li key={message.id} className={`${user.id === message.author ? 'user_message' : 'companion_message'} user-interface-chat__messages-item`}>
                  <UserInterfaceChatMessagesCard user={user} currentChat={currentChat} setCurrentChat={setCurrentChat} companion={companion} message={message} />
                </li>
              ))
            }
          </ul>

        :

          <p className='user-interface-chat_empty-text'>There are no messages in the chat yet</p>
      }
    </>
  )
}

export default UserInterfaceChatMessages