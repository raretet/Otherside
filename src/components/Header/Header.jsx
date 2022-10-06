import React from 'react'
import styles from './Header.module.sass'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className={styles.header}>
        <div className={styles.header_container}>
            <a href="otherside.com"> </a>
            <nav className={styles.header_navbar}>
                <ul>
                    <NavLink className={({isActive}) => 
                      isActive ? 'active_link' : ''
                    } to='/world'>the world</NavLink>
                    <NavLink to='/explore'>explore</NavLink>
                    <NavLink to='/obelisk'>obelisk</NavLink>
                    <NavLink to='/litepaper'>litepaper</NavLink>
                    <NavLink to='/odk'>odk</NavLink>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header