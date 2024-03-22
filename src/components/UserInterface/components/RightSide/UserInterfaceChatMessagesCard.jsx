import React from 'react'
import TextMessageCard from '../../../MessageCard/TextMessageCard'
import ImageMessageCard from '../../../MessageCard/ImageMessageCard'

const UserInterfaceChatMessagesCard = ({ user, companion, message }) => {
  const { type } = message

  return (
    <article className='user-interface-chat__messages-card'>
      {
        type === 'text' ?

          <TextMessageCard user={user} companion={companion} message={message} />

        :

          <ImageMessageCard />
      }
    </article>
  )
}

export default UserInterfaceChatMessagesCard