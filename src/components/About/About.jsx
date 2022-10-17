import React from 'react'
import styles from './About.module.sass'

const About = ({name, title, text}) => {
  return (
    <div className={styles.about}>
        <div className={styles.about_name}>{name}</div>
        <div className={styles.about_title}>{title}</div>
        <div className={styles.about_text}>{text}</div>
    </div>
  )
}

export default About