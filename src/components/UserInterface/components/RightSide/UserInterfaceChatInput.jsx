import React, { useCallback, useEffect, useRef, useState } from 'react'

import { IoImagesOutline, IoPaperPlane } from 'react-icons/io5'
import { Dialog } from '../../../components'
import ImageMessageDialog from '../ImageMessageDialog'
import { closeDialog, openDialog } from '../../../Dialog/helpers/dialogHelpers'

const UserInterfaceChatInput = ({ sendMessage }) => {
  const messageInputRef = useRef(null)
  const imageDialogRef = useRef(null)

  return (
    <div className='user-interface-chat__input-container'>
      <button className='user-interface-chat__input-button' onClick={() => openDialog(imageDialogRef)}><IoImagesOutline size={28} /></button>

      <textarea ref={messageInputRef} className='user-interface-chat__input' type="text" placeholder='Enter a message' />

      <button className='user-interface-chat__input-button' onClick={() => sendMessage('text', messageInputRef)}><IoPaperPlane size={28} /></button>

      <Dialog children={ <ImageMessageDialog sendMessage={sendMessage} close={() => closeDialog(imageDialogRef)} /> } ref={imageDialogRef} />
    </div>
  )
}

export default UserInterfaceChatInput