import React, { useEffect, useState } from 'react'
import UserInterfaceChatMessages from './UserInterfaceChatMessages'
import UserInterfaceChatBar from './UserInterfaceChatBar'
import UserInterfaceChatInput from './UserInterfaceChatInput'
import { getNewMessages } from '../../../../api/chat'

const UserInterfaceChat = ({ user, currentChat, setCurrentChat, clearChat, sendMessage }) => {
  const [timerId, setTimerId] = useState(null)

  useEffect(() => {
    async function getMessages() {
      await getNewMessages(currentChat.id)
        .then(result => {
          if (currentChat.messages.length !== result.length) {
            setCurrentChat(prevValue => ({ ...prevValue, messages: result }))
            console.log(result)
          }
        })
    }

    if (currentChat) {
      const newTimerId = setInterval(getMessages, 5000)
      setTimerId(newTimerId)
    } else {
      clearInterval(timerId)
    }
  }, [currentChat])

  return (
    <div className={`${currentChat ? '' : 'user-interface-chat_inactive'} user-interface-chat_empty`}>
      {
        currentChat ?

          <div className='user-interface-chat'>
            <UserInterfaceChatBar currentChat={currentChat} clearChat={clearChat} />

            <UserInterfaceChatMessages user={user} currentChat={currentChat} />

            <UserInterfaceChatInput sendMessage={sendMessage} />
          </div>

        :

          <p className='user-interface-chat_empty-text'>Choose who you would like to write to</p>
    }
    </div>
  )
}

export default UserInterfaceChat