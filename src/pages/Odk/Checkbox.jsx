import React from 'react'
import { useState } from 'react'
import styles from './Cheackbox.module.sass'

const Checkbox = ({text}) => {
    const [checkbox, setCheckbox] = useState(false)

  return (
    <div className={styles.checkbox}>
      <button className={checkbox ? [styles.checkbox_btn, styles.checkbox_btn_active].join(' ') : styles.checkbox_btn} onClick={() => setCheckbox(!checkbox)}></button>
      <p>{text}</p>
    </div>
  )
}

export default Checkbox