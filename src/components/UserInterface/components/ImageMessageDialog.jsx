import React, { useRef, useState } from 'react'
import FormInput from '../../Form/components/FormInput'
import { IoClose, IoPaperPlane } from 'react-icons/io5'
import { checkUrlValidity } from '../helpers/userInterfaceHelpers'

const ImageMessageDialog = ({ sendMessage, close }) => {
  const imageUrlRef = useRef(null)
  const [imageUrl, setImageUrl] = useState('')

  const imageInputOnChage = (event) => {
    setImageUrl(event.target.value)
  }

  const closeImageDialog = () => {
    close()
    setImageUrl('')
  }

  const sendImage = () => {
    sendMessage('image', imageUrlRef)
    closeImageDialog()
  }

  return (
    <div className={`${checkUrlValidity(imageUrl) ? 'image-message-dialog-container_active-preview' : ''} image-message-dialog-container`}>
      <button className='button image-message-dialog__button' onClick={closeImageDialog}><IoClose size={28} /></button>

      {
        checkUrlValidity(imageUrl) ?

          <img className='image-message-dialog__preview' src={imageUrl} />

        :

          null
      }

      <div className='image-message-dialog__input-container'>
        <input ref={imageUrlRef} className='form-input' name='avatar' type='url' minLength='4' maxLength='100' pattern="^(ftp|https?):\/\/[^ ']+$" placeholder='Link to the picture' value={imageUrl} onChange={imageInputOnChage} />

        <button className='button' onClick={sendImage}><IoPaperPlane size={28} /></button>
      </div>
    </div>
  )
}

export default ImageMessageDialog