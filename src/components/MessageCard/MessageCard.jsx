import React, { useRef } from 'react'

import { Avatar, Dialog } from '../components'
import MessageContent from './MessageContent'
import { IoPencil, IoRemoveCircleOutline } from 'react-icons/io5'
import EditMessageDialog from '../UserInterface/components/EditMessageDialog'
import { closeDialog, openDialog } from '../Dialog/helpers/dialogHelpers'
import { saveMessage } from '../UserInterface/helpers/userInterfaceHelpers'
import { deleteMessageFunction } from '../UserInterface/helpers/userInterfaceFunctions'

const TextMessageCard = ({ user, currentChat, setCurrentChat, companion, message }) => {
  const { id, type, author, content, viewd } = message

  const editMessageDialogRef = useRef(null)

  const saveEditedMessage = async () => {
    await saveMessage(editMessageDialogRef, currentChat.id, id, setCurrentChat)
  }

  return (
    <div className={`${user.id === author ? 'text-message-card_author' : 'text-message-card_companion'} text-message-card`} >

      {
        user.id === author ? 

          <>
            <div className='text-message-card__buttons'>
              <button className='button text-message-card__button' onClick={() => openDialog(editMessageDialogRef)}><IoPencil /></button>

              <button className='button text-message-card__button' onClick={async () => await deleteMessageFunction(currentChat.id, id, setCurrentChat)}><IoRemoveCircleOutline /></button>
            </div>

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

      <Dialog children={ <EditMessageDialog close={() => closeDialog(editMessageDialogRef)} save={saveEditedMessage} /> } ref={editMessageDialogRef} />
    </div>
  )
}

export default TextMessageCard