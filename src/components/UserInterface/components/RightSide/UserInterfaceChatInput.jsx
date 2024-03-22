import React, { useRef } from 'react'

import { IoImagesOutline, IoPaperPlane } from 'react-icons/io5'

const UserInterfaceChatInput = ({ sendMessage }) => {
  const messageInputRef = useRef(null)

  return (
    <div className='user-interface-chat__input-container'>
      <button className='user-interface-chat__input-button' onClick={sendMessage}><IoImagesOutline size={28} /></button>

      <input ref={messageInputRef} className='user-interface-chat__input' type="text" placeholder='Enter a message' />

      <button className='user-interface-chat__input-button' onClick={() => sendMessage('text', messageInputRef)}><IoPaperPlane size={28} /></button>
    </div>
  )
}

export default UserInterfaceChatInput