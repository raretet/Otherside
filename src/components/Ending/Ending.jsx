import React from 'react'
import Button from '../../pages/Connect/Button'
import styles from './Ending.module.sass'

const Ending = () => {
  return (
    <div className={styles.ending}>
        <div className={styles.ending_title}>SEE YOU ON THE OTHERSIDE</div>
        <div className={styles.ending_buttons}>
            <Button href='https://opensea.io/collection/otherdeed' text='buy otherdeed'/>
            <Button href='https://opensea.io/collection/otherdeed' text='claim otherdeed'/>
        </div>
    </div>
  )
}

export default Ending