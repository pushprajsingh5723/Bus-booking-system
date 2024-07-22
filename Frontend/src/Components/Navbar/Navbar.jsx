import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
    <div className='navbar__logo'>Logo</div>
    <div className='navbar__menu'>
        <ul className='navbar__menu__list'>
            <a className='navbar__menu__list__item'> <Link to='/Login'>Login</Link></a>
            <a className='navbar__menu__list__item'><Link to='/Signup'>Signup</Link></a>
            <a className='navbar__menu__list__item'>Bus </a>
        </ul>
    </div> 
    </div>
  )
}

export default Navbar
