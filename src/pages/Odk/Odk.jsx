import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'

import styles from './Odk.module.sass'

const Odk = () => {
  return (
    <div className={styles.odk_container}>
        <Header/>
          <section className={styles.odk}>
            <h1>IT'S YOUR <br/> WORLD TO BUILD</h1>
            <form className={styles.odk_form}>
              <p>Email</p>
              <input  />
              <p>Name</p>
              <input  />
              <p>Company name</p>
              <input  />
              <p>Company size</p>
              <select >
                <option value="female">self-employed</option>
                <option value="male">1 - 10 employees</option>
                <option value="other">11 - 100 employees</option>
                <option value="other">101 - 999 employees</option>
                <option value="other">1,000 - 10,000 employees</option>
                <option value="other">10,000+ employees</option>
              </select>
              <p>Please describe yourself / your company. What is your field of focus? *</p>
              <textarea name="" id="" cols="30" rows="10"></textarea>
              <p>Which ODK are you interested in? Select all that apply.</p>
              <div className={styles.odk_form_checkboxes}>
                  <input  type='checkbox'/>
                  <input  type='checkbox'/>
                  <input  type='checkbox'/>
                  <input  type='checkbox'/>
                  <input  type='checkbox'/>
                  <input  type='checkbox'/>
              </div>
              <p>Tell us more about what you want to build in Otherside *</p>
              <textarea name="" id="" cols="30" rows="10"></textarea>
              <p>* Limited to 256 characters. Be sure to only use alphanumeric characters, commas, dashes, single quotes and periods.</p>
              {/* <div className={styles.odk_form_checkboxes}>
              <input type='checkbox'/> <p>I AGREE TO SHARE MY EMAIL ADDRESS WITH YUGA LABS INC. FOR USE IN ACCORDANCE WITH THE , INCLUDING TO RECEIVE COMMUNICATIONS ABOUT THE ODK PROGRAM</p>
              </div> */}
              <input type="submit" value='join the world-building team'/>
              <div>⚠ If you have strict tracking protection enabled, you may need to disable it for this form to work.</div>
            </form>
          </section>
        <Footer/>
    </div>
  )
}

export default Odk