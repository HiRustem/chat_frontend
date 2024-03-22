import React from 'react'

import { Avatar } from '../components'

const TextMessageCard = ({ user, message }) => {
  const { id, author, content, viewd } = message

  return (
    <div className='text-message-card'>

      <div className='text-message-card__text'>
        {content}
      </div>

      <div className='text-message-card__avatar-container'>
        <Avatar imageClassName='text-message-card__avatar' url={`${author === user.id ? user.avatar : ''}`} />
      </div>
    </div>
  )
}

export default TextMessageCard