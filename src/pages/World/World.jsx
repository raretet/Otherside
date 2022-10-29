import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import WorldDescription from './WorldDesc/WorldDesc'
import Ending from '../../components/Ending/Ending'

import styles from './World.module.sass'

import landImg1 from '../../assets/images/word/land/1.webp'
import landImg2 from '../../assets/images/word/land/2.webp'
import landImg3 from '../../assets/images/word/land/3.webp'

import tierImg1 from '../../assets/images/word/tiers/1.webp'
import tierImg2 from '../../assets/images/word/tiers/2.webp'
import tierImg3 from '../../assets/images/word/tiers/3.webp'
import tierImg4 from '../../assets/images/word/tiers/4.webp'
import tierImg5 from '../../assets/images/word/tiers/5.webp'

import kodasImg1 from '../../assets/images/word/koads/1.webp'
import kodasImg2 from '../../assets/images/word/koads/2.webp'
import kodasImg3 from '../../assets/images/word/koads/3.webp'

import resImg1 from '../../assets/images/word/resources/1.svg'
import resImg2 from '../../assets/images/word/resources/2.svg'
import resImg3 from '../../assets/images/word/resources/3.svg'
import resImg4 from '../../assets/images/word/resources/4.svg'

import artfImg1 from '../../assets/images/word/artifacts/1.webp'
import artfImg2 from '../../assets/images/word/artifacts/2.webp'
import artfImg3 from '../../assets/images/word/artifacts/3.webp'
import artfImg4 from '../../assets/images/word/artifacts/4.webp'
import artfImg5 from '../../assets/images/word/artifacts/5.webp'
import artfImg6 from '../../assets/images/word/artifacts/6.webp'
import artfImg7 from '../../assets/images/word/artifacts/7.webp'
import artfImg8 from '../../assets/images/word/artifacts/8.webp'


const World = () => {
  return (
    <>
        <Header/>
        <div className={styles.world}>
          <div className={styles.world_sec1}>
            <WorldDescription 
            name='THROUGH THE LOOKING GLASS'
            title='A STRANGE NEW WORLD' 
            text='We set out to build the Otherside with one thing in mind: the metaverse should be anything but boring. The world should be dynamic, steeped in narrative, and your actions should hold consequence. Step into the Otherside, where the normal rules do not apply. Where you end up is up to chance. Where you go is up to you.'
            />
            <div className={styles.land}>
              <div>
                <img src={landImg1} alt="" />
              </div>
              <div>
                <img src={landImg2} alt="" />
              </div>
              <div>
                <img src={landImg3} alt="" />
              </div>
            </div>
            <div className={styles.world_sec2}>
              <WorldDescription text='The Otherside is part galaxy and part archipelago, with islands extending from the Biogenic Swamp at the center and roiling outwards to the Infinite Expanse. There are five sediments that lands are built upon: Biogenic Swamp, Chemical Goo, Rainbow Atmos, Cosmic Dream, and Infinite Expanse. Your Otherdeed is the key to a unique blend of environment, sediment, and treasures — some with resources, some home to powerful artifacts. And on a very few, a Koda roams.'/>
              <div className={styles.tires}>
                <div className={styles.tires_container}>
                  <div className={styles.tires_content}>
                    <div className={styles.tires_item}>
                      <img src={tierImg1} alt="" />
                      <div className={styles.tires_item_desc}>
                        <div className={styles.tires_item_name}>INFINITE EXPANSE</div>
                        <div className={styles.tires_item_text}>SLUDGE - TIER 1</div>
                      </div>
                    </div>
                    <div className={styles.tires_item}>
                      <img src={tierImg2} alt="" />
                      <div className={styles.tires_item_desc}>
                        <div className={styles.tires_item_name}>COSMIC DREAM</div>
                        <div className={styles.tires_item_text}>BOG - TIER 2</div>
                      </div>
                    </div>
                    <div className={styles.tires_item}>
                      <img src={tierImg3} alt="" />
                      <div className={styles.tires_item_desc}>
                        <div className={styles.tires_item_name}>RAINBOW ATMOS</div>
                        <div className={styles.tires_item_text}>OBSIDIAN - TIER 3</div>
                      </div>
                    </div>
                    <div className={styles.tires_item}>
                      <img src={tierImg4} alt="" />
                      <div className={styles.tires_item_desc}>
                        <div className={styles.tires_item_name}>CHEMICAL GOO</div>
                        <div className={styles.tires_item_text}>LUSTER - TIER 4</div>
                      </div>
                    </div>
                    <div className={styles.tires_item}>
                      <img src={tierImg5} alt="" />
                      <div className={styles.tires_item_desc}>
                        <div className={styles.tires_item_name}>BIOGENIC SWAMP</div>
                        <div className={styles.tires_item_text}>CRIMSON - TIER 5</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.line}></div>
              </div>
            </div>
            <div className={styles.world_sec3}>
              <WorldDescription
                name='STRANGERS'
                title='VISITORS FROM AFAR'
                text='Meet the Kodas, the primal beings that have ushered us into the Otherside. We don’t know why they’ve brought us here, or what their affinity to this land is. If you are lucky enough to meet a Koda, tread cautiously.'
              />
              <div className={styles.kodas}>
                <div className={styles.kodas_item}>
                  <img src={kodasImg1} alt="" />
                </div>
                <div className={styles.kodas_item}>
                  <img src={kodasImg2} alt="" />
                </div>
                <div className={styles.kodas_item}>
                  <img src={kodasImg3} alt="" />
                </div>
              </div>
            </div>
            <div className={styles.world_sec4}>
              <WorldDescription
                name='RESOURCES'
                title='THE NATURAL MATERIALS'
                text='Every piece of land in the Otherside nurtures up to four replenishing resources that you will be able to harvest and utilize. Anima, Ore, Shard, and Root. Some are rare, some less so. These are the raw materials you will use to shape this world.'
              />
              <div className={styles.resources}>
                <div className={styles.resources_item}>
                  <img src={resImg1} alt="" />
                  <div className={styles.resources_item_title}>ANIMA</div>
                  <div className={styles.resources_item_subtitle}>RESEARCH</div>
                </div>
                <div className={styles.resources_item}>
                  <img src={resImg2} alt="" />
                  <div className={styles.resources_item_title}>ORE</div>
                  <div className={styles.resources_item_subtitle}>METAL</div>
                </div>
                <div className={styles.resources_item}>
                  <img src={resImg3} alt="" />
                  <div className={styles.resources_item_title}>SHARD</div>
                  <div className={styles.resources_item_subtitle}>STONE</div>
                </div>
                <div className={styles.resources_item}>
                  <img src={resImg4} alt="" />
                  <div className={styles.resources_item_title}>ROOT</div>
                  <div className={styles.resources_item_subtitle}>WOOD</div>
                </div>
              </div>
            </div>
            <div className={styles.world_sec5}>
              <WorldDescription
                name='ARTIFACTS'
                title='TREASURES AND TOOLS'
                text='Scattered throughout the lands of Otherside are rare objects, some of which cannot be crafted by any other means. If you find an artifact, know that it may hold secrets to this world as it expands.'
              />
              <div className={styles.artifacts_container}>
                <div className={styles.artifacts}>
                  <div className={styles.artifacts_item}>
                    <img src={artfImg1} alt="" />
                  </div>
                  <div className={styles.artifacts_item}>
                    <img src={artfImg2} alt="" />
                  </div>
                  <div className={styles.artifacts_item}>
                    <img src={artfImg3} alt="" />
                  </div>
                  <div className={styles.artifacts_item}>
                    <img src={artfImg4} alt="" />
                  </div>
                </div>
                <div className={styles.artifacts}>
                  <div className={styles.artifacts_item}>
                    <img src={artfImg5} alt="" />
                  </div>
                  <div className={styles.artifacts_item}>
                    <img src={artfImg6} alt="" />
                  </div>
                  <div className={styles.artifacts_item}>
                    <img src={artfImg7} alt="" />
                  </div>
                  <div className={styles.artifacts_item}>
                    <img src={artfImg8} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.world_sec6}>
              <WorldDescription
                name='TRANSFORMATION'
                title='DYNAMIC NFTS'
                text='Every Otherdeed is a dynamic NFT, built as a collection of all of its elements, from resources to Kodas. Rather than a static representation of a piece of land, your Otherdeed is designed to evolve along with what you choose to do in the game.'
              />
              <div className={styles.card}>
                <div className={styles.card_desc}>
                  <div className={styles.card_desc_title}>SEDIMENT ICON</div>
                  <div className={styles.card_desc_text}>THIS ICON REPRESENTS THE SEDIMENT YOUR LAND HAS. EACH SEDIMENT HAS A UNIQUE FRAME THAT GOES WITH IT</div>
                </div>
                <div className={styles.card_img}>
                  <img src={tierImg5} alt="" />
                </div>
                <div className={styles.card_desc}>
                  <div className={styles.card_desc_title}>KODAS</div>
                  <div className={styles.card_desc_text}>IF YOUR LAND HAS A KODA, IT'S TOKEN ID IS DISPLAYED HERE</div>
                </div>
              </div>
            </div>
            <div className={styles.world_sec7}>
              <WorldDescription
                name='YOUR KEY'
                title='SHAPE THE FUTURE'
                text='Your Otherdeed is your key to helping build the metaverse. Land owners are creators, and can participate in demos, prototypes, test builds, in-person events, and contests that help bring the Otherside to life.'
              />
            </div>
            <div className={styles.world_sec8}>
              <Ending/>
            </div>
          </div>
        </div>
        <Footer/>
    </>
  )
}

export default World