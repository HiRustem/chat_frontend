import React from 'react'
import UserInterfaceChatMessages from './UserInterfaceChatMessages'
import UserInterfaceChatBar from './UserInterfaceChatBar'
import UserInterfaceChatInput from './UserInterfaceChatInput'

const UserInterfaceChat = ({ currentChat, clearChat, sendMessage }) => {
  return (
    <div className={`${currentChat ? '' : 'user-interface-chat_inactive'} user-interface-chat_empty`}>
      {
        currentChat ?

          <div className='user-interface-chat'>
            <UserInterfaceChatBar currentChat={currentChat} clearChat={clearChat} />

            <UserInterfaceChatMessages currentChat={currentChat} />

            <UserInterfaceChatInput sendMessage={sendMessage} />
          </div>

        :

          <p className='user-interface-chat_empty-text'>Choose who you would like to write to</p>
    }
    </div>
  )
}

export default UserInterfaceChat