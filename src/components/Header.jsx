import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { BiHomeAlt, BiUser, BiFile, BiBriefcase, BiMessageDetail } from 'react-icons/bi'
import { GrClose } from 'react-icons/gr'
import { AiOutlineAppstore } from 'react-icons/ai'
import '../assets/styles/Header.scss'

const Header = () => {

  const [navMenuClass, setNavMenuClass] = useState('nav_menu')

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <NavLink to="/" className="nav_logo">Julio</NavLink>
        <div className={navMenuClass} id="nav-menu">
          <ul className="nav_list grid">
            <li className="nav_item">
              <NavLink className="nav_link" to="/">
                <BiHomeAlt className="nav_icon" /> Home
              </NavLink>
            </li>
            <li className="nav_item">
              <NavLink className="nav_link" to="/about">
                <BiUser className="nav_icon" /> About
              </NavLink>
            </li>
            <li className="nav_item">
              <NavLink className="nav_link" to="/skills">
                <BiFile className="nav_icon" /> Skills
              </NavLink>
            </li>
            <li className="nav_item">
              <NavLink className="nav_link" to="/portfolio">
                <BiBriefcase className="nav_icon" /> Portfolio
              </NavLink>
            </li>
            <li className="nav_item">
              <NavLink className="nav_link" to="/contact">
                <BiMessageDetail className="nav_icon" /> Contact Me
              </NavLink>
            </li>
          </ul>
          <GrClose className="nav_close" id="nav-close" onClick={() => setNavMenuClass("nav_menu")} />
        </div>

        <div className="nav_btn">
          <div className="nav_toggle" onClick={() => setNavMenuClass(navMenuClass + " show_menu")} id="nav-toggle">
            <AiOutlineAppstore />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header