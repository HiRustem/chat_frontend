import React from 'react'

import { Avatar, EmptyElement } from '../components'

const Profile = ({ name, avatar, openDialog }) => {
  return (
    <div className='profile'>
      <button className='profile__button' onClick={openDialog}>
        <Avatar imageClassName='profile__avatar' url={avatar} />
      </button>

      <span className='profile__username'>{name}</span>
    </div>
  )
}

export default Profile