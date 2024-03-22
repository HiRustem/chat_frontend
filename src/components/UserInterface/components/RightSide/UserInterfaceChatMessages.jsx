import React from 'react'

const UserInterfaceChatMessages = ({ currentChat }) => {
  const { messages } = currentChat

  return (
    <>
      {
        messages.length > 0 ?

          <ul className='user-interface-chat__messages'>
            {
              messages.map(message => (
                <li key={message.id}>
                  <p>{message.content}</p>
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