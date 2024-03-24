import React from 'react'
import TextMessageCard from '../../../MessageCard/MessageCard'

const UserInterfaceChatMessagesCard = ({ user, currentChat, setCurrentChat, companion, message }) => {
  return (
    <article className='user-interface-chat__messages-card'>
      <TextMessageCard user={user} currentChat={currentChat} setCurrentChat={setCurrentChat} companion={companion} message={message} />
    </article>
  )
}

export default UserInterfaceChatMessagesCard