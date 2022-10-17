import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Button from '../Connect/Button'
import Checkbox from './Checkbox'

import styles from './Odk.module.sass'

const Odk = () => {
  return (
    <div className={styles.odk_container}>
        <Header/>
          <section className={styles.odk}>
            <h1>IT'S YOUR <br/> WORLD TO BUILD</h1>
            <div className={styles.odk_form}>
              <p className={styles.odk_form_description}>Email</p>
              <input  />
              <p className={styles.odk_form_description}>Name</p>
              <input  />
              <p className={styles.odk_form_description}>Company name</p>
              <input  />
              <p className={styles.odk_form_description}>Company size</p>
              <select >
                <option value="female">self-employed</option>
                <option value="male">1 - 10 employees</option>
                <option value="other">11 - 100 employees</option>
                <option value="other">101 - 999 employees</option>
                <option value="other">1,000 - 10,000 employees</option>
                <option value="other">10,000+ employees</option>
              </select>
              <p className={styles.odk_form_description}>Please describe yourself / your company. What is your field of focus? *</p>
              <textarea name="" id="" cols="30" rows="10"></textarea>
              <p className={styles.odk_form_description}>Which ODK are you interested in? Select all that apply.</p>
              <div className={styles.odk_form_checkboxes}>
                  <Checkbox text='CHARACTER CREATION'/>
                  <Checkbox text='CHARACTER SKINS'/>
                  <Checkbox text='IN-GAME RESOURCES'/>
                  <Checkbox text='RICH GAMING'/>
                  <Checkbox text='CASUAL/MINI GAMING'/>
                  <Checkbox text='OTHER'/>
              </div>
              <p className={styles.odk_form_description}>Tell us more about what you want to build in Otherside *</p>
              <textarea name="" id="" cols="30" rows="10"></textarea>
              <div className={styles.small_text}>* Limited to 256 characters. Be sure to only use alphanumeric characters, commas, dashes, single quotes and periods.</div>
                  {/* <Checkbox text='I AGREE TO SHARE MY EMAIL ADDRESS WITH YUGA LABS INC. FOR USE IN ACCORDANCE WITH THE , INCLUDING TO RECEIVE COMMUNICATIONS ABOUT THE ODK PROGRAM'/> */}
              <Button text='join the world-building team'/>
              <div className={`${styles.odk_form_description} ${styles.warning}`}>⚠ If you have strict tracking protection enabled, you may need to disable it for this form to work.</div>
            </div>
          </section>
        <Footer/>
    </div>
  )
}

export default Odk