import React from 'react'

import NavbarLinks from './components/NavbarLinks'
import NavbarLogo from './components/NavbarLogo'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <NavbarLogo />

      <NavbarLinks />
    </nav>
  )
}

export default Navbar