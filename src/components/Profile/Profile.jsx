import React from 'react'

import { EmptyElement } from '../components'

const Profile = ({ username, avatar }) => {
  return (
    <div className='profile'>
      <button className='profile__button'>
        {
          avatar !== '' ?

            <img className='profile__avatar' src={avatar} alt='avatar' />

          :

            <EmptyElement />
        }
      </button>

      <span className='profile__username'>{username}</span>
    </div>
  )
}

export default Profile