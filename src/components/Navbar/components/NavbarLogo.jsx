import React from 'react'

import logo from '../../../assets/images/logo.svg'

const NavbarLogo = () => {
  return (
    <a href="/">
      <img className='navbar__logo' src={logo} alt='logo' />
    </a>
  )
}

export default NavbarLogo