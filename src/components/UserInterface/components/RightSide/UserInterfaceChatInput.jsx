import React from 'react'

const UserInterfaceChatInput = ({ sendMessage }) => {
  return (
    <div className='user-interface-chat__input-container'>
      <input className='user-interface-chat__input' type="text" placeholder='Enter a message' />

      <button className='user-interface-chat__input-button' onClick={sendMessage}>Send</button>
    </div>
  )
}

export default UserInterfaceChatInput