import React from 'react'
import styles from './Percentage.module.sass'

const Percentage = ({percentage, name, text1, text2}) => {
  return (
    <div className={styles.item}>
        <div className={styles.item_top}>
            <div className={styles.percentage}>{percentage}</div>
            <div className={styles.name}>{name}</div>
        </div>
        <div className={styles.item_bottom}>
            <ul>
                <li>{text1}</li>
                <li>{text2}</li>
            </ul>
        </div>
    </div>
  )
}

export default Percentage