import React from 'react'

import { SearchLoading } from '../../../components'
import UserInterfaceChatsCard from './UserInterfaceChatsCard'

const UserInterfaceUsersList = ({ isLoading, usersArray, createChat }) => {
  return (
    <div className='user-interface__users-list'>
      {
        isLoading ?

          <SearchLoading />

        :
            <ul>
              {
                usersArray.map(user => (
                  <li key={user.username} className='user-interface__users-item'>
                    <button className='user-interface__users-button' onClick={() => createChat(user.id, user.username)}>
                      <UserInterfaceChatsCard cardObject={user} />
                    </button>
                  </li>
                ))
              }
          </ul>
      }
    </div>
  )
}

export default UserInterfaceUsersList