import React, { useRef } from 'react'
import { Avatar, Dialog, ImageDialog } from '../../../../components'
import { IoClose } from 'react-icons/io5'
import { closeDialog, openDialog } from '../../../../Dialog/helpers/dialogHelpers'
import ProfileSettingsAvatarDialog from '../../../../ProfileSettings/components/ProfileSettingsAvatarDialog'
import ProfileSettingsButtons from '../../../../ProfileSettings/components/ProfileSettingsButtons'
import ProfileSettingsNameDialog from '../../../../ProfileSettings/components/ProfileSettingsNameDialog'

const ChatProfileDialog = ({ currentChat, setCurrentChat, close }) => {
  const imageDialogRef = useRef(null)
  const changeNameRef = useRef(null)
  const changeAvatarRef = useRef(null)

  const { id, name, avatar } = currentChat

  const closeChatProfileDialog = (ref) => {
    closeDialog(ref)
    ref.current.value = ''
  }

  const saveChatNameValue = async () => {
    closeChatProfileDialog(changeNameRef)
  }

  const saveChatAvatarValue = async () => {
    closeChatProfileDialog(changeAvatarRef)
  }

  return (
    <div className='chat-profile-dialog'>
      <button className='button chat-profile-dialog__close-button' onClick={close}><IoClose size={28} /></button>

      <button className='chat-profile-dialog__avatar-container' onClick={() => openDialog(imageDialogRef)}>
        <Avatar className='chat-profile-dialog__avatar' url={avatar} />
      </button>

      <p>{name}</p>

      <ProfileSettingsButtons openNameDialog={() => openDialog(changeNameRef)} nameText='Edit Name' openAvatarDialog={() => openDialog(changeAvatarRef)} avatarText='Edit Avatar' lastFunction={() => {}} lastText='Delete Chat' />

      <Dialog children={ <ImageDialog imageUrl={avatar} imageAlt='chat avatar' close={() => closeDialog(imageDialogRef)} /> } ref={imageDialogRef} />

      <Dialog children={ <ProfileSettingsNameDialog close={() => closeChatProfileDialog(changeNameRef)} save={saveChatNameValue} /> } ref={changeNameRef} />

      <Dialog children={ <ProfileSettingsAvatarDialog close={() => closeChatProfileDialog(changeAvatarRef)} save={saveChatAvatarValue} /> } ref={changeAvatarRef} />
    </div>
  )
}

export default ChatProfileDialog