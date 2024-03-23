import React from 'react'

import { Avatar } from '../components'

const TextMessageCard = ({ user, companion, message }) => {
  const { id, author, content, viewd } = message

  return (
    <div className={`${user.id === author ? 'text-message-card_author' : 'text-message-card_companion'} text-message-card`}>

      {
        user.id === author ? 

          <>
            <div className='text-message-card__text_author'>
              {content}
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
              {content}
            </div>
          </>

      }
    </div>
  )
}

export default TextMessageCard