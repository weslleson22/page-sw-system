import './navbar.css'
import React from 'react'
import Logo from '../images/logo-SW-1.png'
import { Link, NavLink } from 'react-router-dom'
import {links} from '../data'
import {FaBars} from 'react-icons/fa' 
export const NavBar = () => {
  return (
    <nav>
    <div className="container nav__container">
        <Link to="/" className='logo'>
            <img src={Logo} alt="Nav logo" />
        </Link>
        <ul className='nav__links'>
          {
            links.map(({name, path}, index)=>{
              return(
            <li >
              <NavLink to={path} className={({isActive})=> isActive ? 'active-nav' : ''}>{name}</NavLink>
            </li>
              )                  

            })
          }
        </ul>
        <button className='nav__toggle-btn'>
          <FaBars/>
        </button>
  
        
    </div>
    </nav>
  )
}

export default NavBar;
