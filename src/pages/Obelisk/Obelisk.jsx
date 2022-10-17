import React from 'react'
import About from '../../components/About/About'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import ObeliskDescription from './ObeliskDesc'

import styles from './Obelisk.module.sass'

import obelisk1 from '../../assets/images/obelisk/Obelisk_01.webp'
import obelisk2 from '../../assets/images/obelisk/Obelisk_02.webp'
import obelisk3 from '../../assets/images/obelisk/Obelisk_03.webp'
import obelisk4 from '../../assets/images/obelisk/Obelisk_04.webp'
import obelisk5 from '../../assets/images/obelisk/Obelisk_05.webp'
import obelisk6 from '../../assets/images/obelisk/Obelisk_06.webp'
import obelisk7 from '../../assets/images/obelisk/Obelisk_07.webp'
import obelisk8 from '../../assets/images/obelisk/Obelisk_08.webp'
import obelisk9 from '../../assets/images/obelisk/Obelisk_09.webp'
import obelisk10 from '../../assets/images/obelisk/Obelisk_10.webp'
import obelisk11 from '../../assets/images/obelisk/Obelisk_11.webp'

const Obelisk = () => {
  return (
    <>
      <Header/>
      <div className={styles.obelisk}>
        <div className={styles.obelisk_content}>
          <About name='obelisk' title='THE VOYAGER’S JOURNEY' text='Welcome, Voyager. If you hold an Otherdeed, you hold a key to this evolving vision of Otherside — and to shaping what it becomes.'/>
        </div>
        <div className={`${styles.obelisk_item} ${styles.obelisk_item_fdrr}`}>
        <img src={obelisk1} alt="obelisk1" />
          <ObeliskDescription title='FIRST TRIP' text='The first tech demo of the Otherside, for Voyagers only. A celebration of what’s to come and an opportunity for Voyagers to gather, explore, and plan.'/>
        </div>
        <div className={`${styles.obelisk_item} ${styles.mt}`}>
        <img src={obelisk2} alt="obelisk2" />
          <ObeliskDescription title='THE CODEX' text='Learn how to link your lands, and more, in the Otherside Codex, a living document co-written with the Voyagers. Remember, today’s decisions bring possibilities and risks for the future of the Otherside, so tread carefully.'/>
        </div>
        <div className={styles.obelisk_item_container}>
          <div className={styles.obelisk_item_grid}>
            <img src={obelisk3} alt="" />
            <ObeliskDescription title='KODA ORIGINS //THE DECOUPLING' text='A cosmic earthquake shakes up our universe, bringing with it a vision into the Kodas’ past and an opportunity for Voyagers to decouple their Otherdeeds’ constituent parts. Where do the Kodas and their artifacts go from here? Voyagers decide.'/>
          </div>
          <div className={styles.obelisk_item_grid}>
            <img src={obelisk4} alt="" />
            <ObeliskDescription title='THE GROWTH' text='The lands of the Otherside rumble to life, generating resources, but a destructive and invasive species also emerges. Heed the Codex, Voyager.'/>
          </div>
          <div className={styles.obelisk_item_grid}>
            <img src={obelisk5} alt="" />
            <ObeliskDescription title='THE AGORA' text='Voyagers, come together to buy, sell, barter, and trade for what you need. Or craft new items from raw materials. Let us build, create, and innovate with each other.'/>
          </div>
          <div className={styles.obelisk_item_grid}>
            <img src={obelisk6} alt="" />
            <ObeliskDescription title='THE DREAM' text='An (impossible?) arcade machine emerges at the center of the Biogenic Swamp. Use your trip wisely and be rewarded.'/>
          </div>
          <div className={styles.obelisk_item_grid}>
            <img src={obelisk7} alt="" />
            <ObeliskDescription title='THE CHOICE' text='What lies beyond the Otherside? What creatures call it home – and are they friends or foes? New lands activate and are available for Voyagers. It’s time to choose a side.'/>
          </div>
          <div className={styles.obelisk_item_grid}>
            <img src={obelisk8} alt="" />
            <ObeliskDescription title='THE SETTLING' text='The Otherside is what you make of it. Voyagers, take your resources and crafted items and create structures to populate your land.'/>
          </div>
        </div>
        <div className={styles.obelisk_li_container}>
          <div className={styles.obelisk_li_item}>
            <img src={obelisk9} alt="" />
            <ObeliskDescription title='THE TOOLKIT' text='An ODK brings new opportunities for Voyagers. Leave your mark on the Otherside as we build even bigger, together.'/>
          </div>
          <div className={styles.obelisk_li_item}>
            <img src={obelisk10} alt="" />
            <ObeliskDescription title='THE AERONAUTS' text='Much of the Otherside is shrouded in mystery, but who knows what Voyagers might discover with a different perspective?'/>
          </div>
          <div className={styles.obelisk_li_item}>
            <img src={obelisk11} alt="" />
            <ObeliskDescription title='THE RIFT' text='An interdimensional rift cuts open the sky. Voyagers, it’s time to fully explore. Choose your starting stats and skills. Your work on the Obelisk is complete, but there is still much more to be done.'/>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Obelisk