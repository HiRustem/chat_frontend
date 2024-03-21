import React from 'react'

const UserInterfaceChatMessages = ({ currentChat }) => {
  const { messages } = currentChat

  return (
    <>
      {
        messages.length > 0 ?

          <div className='user-interface-chat__messages'>
        
          </div>

        :

          <p className='user-interface-chat_empty-text'>There are no messages in the chat yet</p>
      }
    </>
  )
}

export default UserInterfaceChatMessages