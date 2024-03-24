import React, { useEffect, useState } from 'react'
import { SearchBar } from '../../../components'
import UserInterfaceUsersList from './UserInterfaceUsersList'
import UserInterfaceChatsList from './UserInterfaceChatsList'
import { getChats, getChatsData } from '../../helpers/userInterfaceFunctions'

const UserInterfaceChatsBar = ({ user, currentChat, createChat, setChat }) => {
  const { chats } = user

  const [isLoading, setIsLoading] = useState(false)
  const [chatsArray, setChatsArray] = useState([])
  const [resultArray, setResultArray] = useState([])

  useEffect(() => {
    setIsLoading(true)
    getChatsData(chats, setChatsArray)
    setIsLoading(false)
  }, [currentChat])

  useEffect(() => {
    setInterval(() => getChats(user, chats, setChatsArray), 10000)
  }, [])

  return (
    <div className={`${currentChat ? 'user-interface__chats-bar_inactive' : ''} user-interface__chats-bar`}>
      <SearchBar setResultArray={setResultArray} setIsLoading={setIsLoading} />

      {
        resultArray.length === 0 ?

          <UserInterfaceChatsList isLoading={isLoading} chatsArray={chatsArray} setChat={setChat} />

        :
          <UserInterfaceUsersList isLoading={isLoading} usersArray={resultArray} createChat={createChat} />
      }
    </div>
  )
}

export default UserInterfaceChatsBar