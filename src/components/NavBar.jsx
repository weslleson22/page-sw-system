import './navbar.css'
import React from 'react'
import Logo from '../images/logo-SW-1.png'
import { Link, NavLink } from 'react-router-dom'
export const NavBar = () => {
  return (
    <div className="container nav_container">
        <Link to="/" className='logo'>
            <img src={Logo} alt="Nav logo" />
        </Link>
        
        nav buttons
        
    </div>
  )
}

export default NavBar;
