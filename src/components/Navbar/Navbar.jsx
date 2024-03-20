import React from 'react'

import NavbarLinks from './components/NavbarLinks'
import NavbarLogo from './components/NavbarLogo'

import { Profile } from '../components'

const Navbar = ({ profileInfo, openDialog }) => {
  return (
    <nav className='navbar'>
      <NavbarLogo />

      {
        profileInfo ?

          <Profile username={profileInfo.username} avatar={profileInfo.avatar} openDialog={openDialog} />

        :

          <NavbarLinks />
      }
    </nav>
  )
}

export default Navbar