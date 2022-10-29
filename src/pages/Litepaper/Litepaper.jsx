import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'

import styles from './Litepaper.module.sass'
import Navbar from './Navbar/Navbar'

import { content } from './Navbar/navbarDB'

import first from '../../assets/images/litepaper/1.jpeg'

const Litepaper = () => {
  return (
    <>
        <Header/>
        <div className={styles.litepaper}>
          <div className={styles.litepaper_container}>
            <div className={styles.litepaper_title}>THE OTHERSIDE LITEPAPER</div>
            <article className={styles.litepaper_content}>
              <Navbar/>
              <div className={styles.litepaper_articles}>
                <img className={styles.firstImg} src={first} alt="" />
                {
                  content.map(c => 
                    <>
                      <h1 className={styles.content_title}>{c.title}</h1>
                      <h2 className={styles.content_subtitle}>{c.subtitle}</h2>
                      <img className={styles.content_img} src={c.img} alt="" />
                      <p className={styles.content_text}>{c.text}</p>
                    </>
                  )
                }
              </div>
            </article>
          </div>
        </div>
        <Footer/>
    </>
  )
}

export default Litepaper