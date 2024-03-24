import React, { useEffect, useState } from 'react'
import UserInterfaceChatMessages from './UserInterfaceChatMessages'
import UserInterfaceChatBar from './UserInterfaceChatBar'
import UserInterfaceChatInput from './UserInterfaceChatInput'
import { getMessagesFunction } from '../../helpers/userInterfaceFunctions'

const UserInterfaceChat = ({ isLoading, user, companion, currentChat, setCurrentChat, clearChat, sendMessage }) => {
  const [timerId, setTimerId] = useState(null)

  useEffect(() => {
    if (currentChat && companion) {
      const newTimerId = setInterval(async () => {
        await getMessagesFunction(currentChat, setCurrentChat)
      }, 5000)

      setTimerId(newTimerId)
    } else {
      clearInterval(timerId)
    }
  }, [currentChat, companion])

  return (
    <div className={`${currentChat ? '' : 'user-interface-chat_inactive'} user-interface-chat_empty`}>
      {
        currentChat && companion ?

          <div className='user-interface-chat'>
            <UserInterfaceChatBar currentChat={currentChat} clearChat={clearChat} />

            <UserInterfaceChatMessages user={user} companion={companion} currentChat={currentChat} />

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