import React from 'react'

const MessageContent = ({ type, content }) => {

  return (
    <>
      {
        type === 'text' ?

            <p>{content}</p>

          :

          <img className='message-content__image' src={content} />
      }
    </>
  )
}

export default MessageContent