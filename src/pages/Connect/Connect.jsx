import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Button from './Button'

import styles from './Connect.module.sass'

const Connect = () => {
  return (
    <>
      <Header/>
          <div className={styles.connect}>
            <div className={styles.connect_content}>
              <h1>CONNECT YOUR WALLET</h1>
              <div className={styles.connect_subtitle}>
                <p>You need to connect your wallet before proceeding.</p>
              </div>
              <div className={styles.connect_btn}>
                <Button href={'https://metamask.zendesk.com/hc/en-us/articles/360015489531-Getting-started-with-MetaMask'} text='metamask'/>
                <Button href={'https://www.coinbase.com/wallet/getting-started-extension'} text='coinbase wallet'/>
                <Button href={'https://walletconnect.com/'} text='walletconnect'/>
              </div>
            </div>
          </div>
      <Footer/>
    </>
  )
}

export default Connect