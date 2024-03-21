import React from 'react'

import { IoClose } from 'react-icons/io5'

const ImageDialog = ({ imageUrl, imageAlt, close }) => {
  return (
    <div className='image-dialog-container'>
      <span></span>

      <img className='image-dialog__image' src={imageUrl} alt={imageAlt} />

      <button className='button image-dialog__button' onClick={close}><IoClose size={28} /></button>
    </div>
  )
}

export default ImageDialog