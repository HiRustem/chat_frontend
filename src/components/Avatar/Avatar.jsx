import React from 'react'

import { EmptyElement } from '../components'

const Avatar = ({ imageClassName, url }) => {
  return (
    <>
      {
          url !== '' ?

            <img className={`${imageClassName} avatar`} src={url} alt='avatar' />

          :

            <EmptyElement />
        }
    </>
  )
}

export default Avatar