import React from 'react'

import { IoChevronBack } from 'react-icons/io5'

import { Avatar } from '../../../components'

const UserInterfaceChatBar = ({ currentChat, clearChat }) => {
  const { name, avatar } = currentChat
  
  return (
    <div className='user-interface-chat__bar'>
      <button className='button user-interface-chat__bar-button' onClick={clearChat}><IoChevronBack size={32} /></button>

      <p className='user-interface-chat__bar-name'>{name}</p>

      <button className='button user-interface__chat__bar__image-button'>
        <Avatar imageClassName='user-interface-chat__bar-avatar' url={avatar} />
      </button>
    </div>
  )
}

export default UserInterfaceChatBar