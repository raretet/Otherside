import React, { useState } from 'react'
import styles from './Header.module.sass'
import { NavLink } from 'react-router-dom'

import logo from '../../assets/images/othersideLogo.png'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai' 

const Header = () => {

  const [menu, setMenu] = useState(false)

  return (
    <header className={styles.header}>
        <div className={styles.header_container}>
          {menu ? 
          <div className={styles.connect_btn}>
            <button>
              <NavLink to='connect'>connect</NavLink>
            </button>
          </div>
           : <></>}
            <nav className={menu ? [styles.header_navbar, styles.menu].join(' ') : styles.header_navbar}>
                <ul>
                    <NavLink to='/world'>the world</NavLink>
                    <NavLink to='/explore'>explore</NavLink>
                    <NavLink to='/obelisk'>obelisk</NavLink>
                    <NavLink to='/litepaper'>litepaper</NavLink>
                    <NavLink to='/odk'>odk</NavLink>
                </ul>
            </nav>
                    <NavLink to='/' className={styles.logo} href="otherside.com">
                      <img src={logo} alt="" />
                    </NavLink>
            <div className={styles.header_connect}>
              <NavLink to='/'>my otherdees</NavLink>
                <button>
                  <NavLink to='connect'>connect</NavLink>
                </button>
            </div>
            <div onClick={() => setMenu(!menu)} className={styles.mobile_btn}>
              {menu ? <AiOutlineClose size={22}/> : <AiOutlineMenu size={22}/>} 
            </div>
        </div>
    </header>
  )
}

export default Header