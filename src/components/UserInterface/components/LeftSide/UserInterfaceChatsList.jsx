import React from 'react'

import UserInterfaceChatsCard from './UserInterfaceChatsCard'

const UserInterfaceChatsList = ({ isLoading, chatsArray }) => {
  return (
    <div className='user-interface__users-list'>
      {
        isLoading ?

          'Loading...'

        :
            <ul>
              {
                chatsArray.map(chat => (
                  <li key={chat.id} className='user-interface__users-item'>
                    <button className='user-interface__users-button'>
                      <UserInterfaceChatsCard cardObject={chat} />
                    </button>
                  </li>
                ))
              }
          </ul>
      }
    </div>
  )
}

export default UserInterfaceChatsList