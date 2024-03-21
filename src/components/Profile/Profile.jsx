import React from 'react'

import { EmptyElement } from '../components'

const Profile = ({ name, avatar, openDialog }) => {
  return (
    <div className='profile'>
      <button className='profile__button' onClick={openDialog}>
        {
          avatar !== '' ?

            <img className='profile__avatar' src={avatar} alt='avatar' />

          :

            <EmptyElement />
        }
      </button>

      <span className='profile__username'>{name}</span>
    </div>
  )
}

export default Profile