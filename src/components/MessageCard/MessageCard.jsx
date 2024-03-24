import React from 'react'

import { Avatar } from '../components'
import MessageContent from './MessageContent'

const TextMessageCard = ({ user, companion, message }) => {
  const { id, type, author, content, viewd } = message

  return (
    <div className={`${user.id === author ? 'text-message-card_author' : 'text-message-card_companion'} text-message-card`}>

      {
        user.id === author ? 

          <>
            <div className='text-message-card__text_author'>
              <MessageContent type={type} content={content} />
            </div>

            <div className='text-message-card__avatar-container'>
              <Avatar imageClassName='text-message-card__avatar' url={`${author === user.id ? user.avatar : companion.avatar}`} />
            </div>
          </>

          :

          <>
            <div className='text-message-card__avatar-container'>
              <Avatar imageClassName='text-message-card__avatar' url={`${author === user.id ? user.avatar : companion.avatar}`} />
            </div>

            <div className='text-message-card__text_companion'>
              <MessageContent type={type} content={content} />
            </div>
          </>

      }
    </div>
  )
}

export default TextMessageCard