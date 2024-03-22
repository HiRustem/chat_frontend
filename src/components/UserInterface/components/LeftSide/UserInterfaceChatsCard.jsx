import React from 'react'
import { Avatar } from '../../../components'

const UserInterfaceChatsCard = ({ cardObject }) => {
  const { username, name, avatar } = cardObject

  return (
    <article className='user-interface__user-card'>
      <div className='user-interface__user-card__image-container'>
        <Avatar imageClassName='user-interface__user-card__image' url={avatar} />
      </div>

      <div className='user-interface__user-card__names'>
        <p className='user-interface__user-card__name'>{name}</p>

        <p className='user-interface__user-card__username'>{username ? username : ''}</p>
      </div>
    </article>
  )
}

export default UserInterfaceChatsCard