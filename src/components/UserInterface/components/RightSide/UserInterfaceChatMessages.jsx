import React from 'react'
import UserInterfaceChatMessagesCard from './UserInterfaceChatMessagesCard'

const UserInterfaceChatMessages = ({ user, currentChat }) => {
  const { messages } = currentChat
  
  return (
    <>
      {
        messages.length > 0 ?

          <ul className='user-interface-chat__messages'>
            {
              messages.map(message => (
                <li key={message.id} className='user-interface-chat__messages-item'>
                  <UserInterfaceChatMessagesCard user={user} message={message} />
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