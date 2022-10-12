import React from 'react'
import styles from './Button.module.sass'

const Button = ({href, text}) => {
  return (
    <>
        <a href={href} className={styles.btn}>
          <span>
            {text}
          </span>
        </a>
    </>
  )
}

export default Button