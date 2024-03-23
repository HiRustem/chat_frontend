import React from 'react'
import TextMessageCard from '../../../MessageCard/MessageCard'

const UserInterfaceChatMessagesCard = ({ user, companion, message }) => {
  return (
    <article className='user-interface-chat__messages-card'>
      <TextMessageCard user={user} companion={companion} message={message} />
    </article>
  )
}

export default UserInterfaceChatMessagesCard