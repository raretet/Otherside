import React from 'react'
import styles from './WorldDesc.module.sass'

const WorldDescription = ({name, title, text}) => {
  return (
    <div className={styles.world_description}>
        <div className={styles.world_description_name}>{name}</div>
        <div className={styles.title}>{title}</div>
        <div className={styles.text}>{text}</div>
    </div>
  )
}

export default WorldDescription