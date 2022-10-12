import React from 'react'
import styles from './Footer.module.sass'

import footerImg from '../../assets/images/footer.svg'
import yugalabsImg from '../../assets/images/yugalabs.svg'
import improbableImg from '../../assets/images/improbable.svg'
import americabrandsImg from '../../assets/images/americabrands.svg'
import twitter from '../../assets/images/twitter.svg'
import discord from '../../assets/images/discord.svg'
import youtube from '../../assets/images/youtube.svg'

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.footer_content}>
            <div className={styles.footer_partners}>
                <img src={yugalabsImg} alt="yugalabsImg" />
                <img src={improbableImg} alt="improbableImg" />
                <img src={americabrandsImg} alt="americabrandsImg" />
            </div>
            <div className={styles.footer_form}>
                <div className={styles.footer_form_container}>
                    <div className={styles.footer_form_title}>Stay up to date with Otherside</div>
                    <div className={styles.footer_form_email}>
                        <input type="text" placeholder='Enter your email'/>
                        <button>subscribe</button>
                    </div>
                </div>
            </div>
            <div className={styles.footer_info}>
                <span>© 2022 YUGA LABS INC.</span>
                <ul className={styles.footer_info_links}>
                    <li>FAQS</li>
                    <li>Terms & conditions</li>
                    <li>Privacy</li>
                    <li>License</li>
                    <li>NFt Purchase Agreement</li>
                </ul>
                <div className={styles.footer_SN}>
                    <ul>
                        <li>
                            <a href="https://twitter.com/OthersideMeta">
                                <img src={twitter} alt="twitter" />
                            </a>
                        </li>
                        <li>
                            <a href="https://discord.com/invite/the-otherside">
                                <img src={discord} alt="discord" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/channel/UCB6R9NAjkgxQi_QEkc4O25Q">
                                <img src={youtube} alt="youtube" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className={styles.footer_img}>
            <img src={footerImg} alt="" />
        </div>
    </div>
  )
}

export default Footer