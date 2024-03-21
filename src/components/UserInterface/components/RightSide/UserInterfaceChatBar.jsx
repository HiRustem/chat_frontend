import React from 'react'
import { Avatar } from '../../../components'

const UserInterfaceChatBar = ({ currentChat, clearChat }) => {
  const { name, avatar } = currentChat
  
  return (
    <div className='user-interface-chat__bar'>
      <button className='button user-interface-chat__bar-button' onClick={clearChat}>Back</button>

      <p className='user-interface-chat__bar-name'>{name}</p>

      <div className='user-interface__chat__bar__image-container'>
        <Avatar imageClassName='user-interface-chat__bar-avatar' url={avatar} />
      </div>
    </div>
  )
}

export default UserInterfaceChatBar