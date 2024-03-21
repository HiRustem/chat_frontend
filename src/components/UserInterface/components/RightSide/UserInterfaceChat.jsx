import React from 'react'
import UserInterfaceChatMessages from './UserInterfaceChatMessages'
import UserInterfaceChatBar from './UserInterfaceChatBar'
import UserInterfaceChatInput from './UserInterfaceChatInput'

const UserInterfaceChat = ({ currentChat }) => {
  return (
    <div className='user-interface-chat'>
      <UserInterfaceChatBar />

      <UserInterfaceChatMessages />

      <UserInterfaceChatInput />
    </div>
  )
}

export default UserInterfaceChat