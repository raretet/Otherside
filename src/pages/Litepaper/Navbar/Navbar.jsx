import React from 'react'
import styles from './Navbar.module.sass'

import {links} from './navbarDB'
import { useScrollBy } from "react-use-window-scroll";

const Navbar = () => {
  const scrollBy = useScrollBy();
  return (
    <div className={styles.navbar}>
        <nav className={styles.navbar_content}>
            <div className={styles.navbar_content_title}>TABLE OF CONTENTS</div>
            <ul className={styles.navbar_content_list}>
              {
                links.map(link => 
                  <li key={link.id} className={styles.list}>
                    <div className={styles.list_title}>
                      <span className={styles.list_title_number}>{link.id + ' '}</span>
                      <span  className={styles.list_title_text} onClick={() => scrollBy({top: link.position, left: 0, behavior: 'smooth'})}>{link.title}</span>
                    </div>
                    <div className={styles.list_link} onClick={() => scrollBy({top: link.position, left: 0, behavior: 'smooth'})}>{link.link1}</div>
                    <div className={styles.list_link} onClick={() => scrollBy({top: link.position, left: 0, behavior: 'smooth'})}>{link.link2}</div>
                    <div className={styles.list_link} onClick={() => scrollBy({top: link.position, left: 0, behavior: 'smooth'})}>{link.link3}</div>
                    <div className={styles.list_link} onClick={() => scrollBy({top: link.position, left: 0, behavior: 'smooth'})}>{link.link4}</div>
                  </li>
                )
              }
            </ul>
        </nav>
    </div>
  )
}

export default Navbar