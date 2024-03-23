import React, { useEffect, useState } from 'react'
import { SearchBar } from '../../../components'
import UserInterfaceUsersList from './UserInterfaceUsersList'
import { findUserById, findUserByUsername } from '../../../../api/user'
import UserInterfaceChatsList from './UserInterfaceChatsList'
import { getChat } from '../../../../api/chat'

const UserInterfaceChatsBar = ({ user, setUser, currentChat, createChat, setChat }) => {
  const { chats } = user

  const [isLoading, setIsLoading] = useState(false)
  const [chatsArray, setChatsArray] = useState([])
  const [resultArray, setResultArray] = useState([])

  useEffect(() => {
    async function getChatsData() {
      setIsLoading(true)

      const newChats = []

      for (let chatId of chats) {
        await getChat(chatId)
          .then(result => {
            if (Object.keys(result).length > 0) {
              newChats.push(result)
            }
          })
          .catch(error => console.log(error))
      }
  
      setChatsArray(newChats)
  
      setIsLoading(false)
    }

    getChatsData()
  }, [])

  // useEffect(() => {
  //   async function getChats() {
  //     await findUserById(user.id)
  //       .then(result => {
  //         if (chatsArray.length !== result.chats.length) {
  //           setChatsArray(result.chats)
  //           console.log(result.chats)
  //         } else {
  //           console.log('chats up to date')
  //         }
  //         console.log(result)
  //       })
  //   }

  //   setInterval(getChats, 5000)
  // }, [])

  return (
    <div className={`${currentChat ? 'user-interface__chats-bar_inactive' : ''} user-interface__chats-bar`}>
      <SearchBar searchFunction={findUserByUsername} setResultArray={setResultArray} setIsLoading={setIsLoading} />

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