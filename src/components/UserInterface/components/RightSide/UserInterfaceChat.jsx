import React, { useEffect, useState } from 'react'
import UserInterfaceChatMessages from './UserInterfaceChatMessages'
import UserInterfaceChatBar from './UserInterfaceChatBar'
import UserInterfaceChatInput from './UserInterfaceChatInput'
import { getMessagesFunction } from '../../helpers/userInterfaceFunctions'

const UserInterfaceChat = ({ isLoading, user, setUser, companion, currentChat, setCurrentChat, clearChat, sendMessage }) => {
  const getMessages = async () => {
    if (currentChat && companion) {
      await getMessagesFunction(currentChat, setCurrentChat)
    }
  }

  useEffect(() => {
    const newTimerId = setInterval(getMessages, 5000)

    if (!currentChat && !companion) {
      clearInterval(newTimerId)
    }

    return () => clearInterval(newTimerId)
  }, [currentChat, companion])

  return (
    <div className={`${currentChat && companion ? '' : 'user-interface-chat_inactive'} user-interface-chat_empty`}>
      {
        currentChat && companion ?

          <div className='user-interface-chat'>
            <UserInterfaceChatBar user={user} setUser={setUser} currentChat={currentChat} setCurrentChat={setCurrentChat} clearChat={clearChat} />

            <UserInterfaceChatMessages user={user} companion={companion} currentChat={currentChat} setCurrentChat={setCurrentChat} />

            <UserInterfaceChatInput sendMessage={sendMessage} />
          </div>

        :

          <div className='user-interface-chat_empty-text'>
            {
              isLoading ?

                'Loading...'

              :

                <p className='user-interface-chat_empty-text'>Choose who you would like to write to</p>
            }
          </div>

    }

    </div>
  )
}

export default UserInterfaceChat