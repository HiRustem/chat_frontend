import React from 'react'

const NavbarLinks = () => {
  return (
    <ul className='navbar__links'>
      <li className='navbar__links-item'>
        <a className='navbar__links-link' href='/user/register'>Sign Up</a>
      </li>

      <li className='navbar__links-item'>
        <a className='navbar__links-link' href='/user/login'>Sign In</a>
      </li>
    </ul>
  )
}

export default NavbarLinks