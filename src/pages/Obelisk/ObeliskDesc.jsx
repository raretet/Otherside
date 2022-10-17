import React from 'react'
import styles from './ObeliskDesc.module.sass'

const ObeliskDescription = ({title, text}) => {
    return (
        <div className={styles.obelisk_desc}>
            <div className={styles.obelisk_desc_title}>{title}</div>
            <div className={styles.obelisk_desc_text}>{text}</div>
        </div>
        )
    }
    
export default ObeliskDescription
