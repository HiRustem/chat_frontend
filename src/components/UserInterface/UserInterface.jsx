import React, { useState } from 'react'

import UserInterfaceChat from './components/RightSide/UserInterfaceChat'
import UserInterfaceChatsBar from './components/LeftSide/UserInterfaceChatsBar'
import { checkChatMembers } from './helpers/checkChatMembers'
import { getChat } from '../../api/chat'

const UserInterface = ({ user }) => {

  const [currentChat, setCurrentChat] = useState(null)
  
  const createChat = async (id, username) => {

    for (let chatId of user.chats) {
      const chat = await getChat(chatId)
      .then(result => { return result })
      .catch(error => console.log(error))

      if (checkChatMembers(id, chat)) {
        console.log('Можно')
      }
    }

    setCurrentChat()
  }

  return (
    <div className='user-interface'>
      <div className='user-interface__chat'>
        <UserInterfaceChatsBar user={user} createChat={createChat} />

        <UserInterfaceChat currentChat={currentChat} />
      </div>
    </div>
  )
}

export default UserInterface