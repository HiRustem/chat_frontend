import React, { useRef } from 'react'

import { IoChevronBack } from 'react-icons/io5'

import { Avatar, Dialog } from '../../../components'
import ChatProfileDialog from './ChatProfile/ChatProfileDialog'
import { closeDialog, openDialog } from '../../../Dialog/helpers/dialogHelpers'
import { deleteChatFunction } from '../../helpers/userInterfaceFunctions'

const UserInterfaceChatBar = ({ user, setUser, currentChat, setCurrentChat, clearChat }) => {
  const chatProfileRef = useRef(null)

  const { name, avatar } = currentChat

  const deleteChat = async () => {
    await deleteChatFunction(currentChat.id)
      .then(result => {
        const oldChats = user.chats

        const newChats = oldChats.filter(chat => parseInt(chat) !== result.id)

        setUser(prevValue => ({ ...prevValue, chats: newChats }))
        setCurrentChat(null)

        closeDialog(chatProfileRef)
      })
  }
  
  return (
    <div className='user-interface-chat__bar'>
      <button className='button user-interface-chat__bar-button' onClick={clearChat}><IoChevronBack size={32} /></button>

      <p className='user-interface-chat__bar-name'>{name}</p>

      <button className='button user-interface__chat__bar__image-button' onClick={() => openDialog(chatProfileRef)}>
        <Avatar imageClassName='user-interface-chat__bar-avatar' url={avatar} />
      </button>

      <Dialog children={ <ChatProfileDialog currentChat={currentChat} setCurrentChat={setCurrentChat} deleteChat={deleteChat} close={() => closeDialog(chatProfileRef)} /> } ref={chatProfileRef} />
    </div>
  )
}

export default UserInterfaceChatBar