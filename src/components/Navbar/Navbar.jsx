import React from 'react'

import NavbarLinks from './components/NavbarLinks'
import NavbarLogo from './components/NavbarLogo'

import { Profile } from '../components'

const Navbar = ({ profileInfo }) => {
  return (
    <nav className='navbar'>
      <NavbarLogo />

      {
        profileInfo ?

          <Profile username={profileInfo.username} avatar={profileInfo.avatar} />

        :

          <NavbarLinks />
      }
    </nav>
  )
}

export default Navbar