import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'

import styles from './Otherpage.module.sass'
import ReactPlayer from 'react-player'
import WorldDescription from '../World/WorldDesc/WorldDesc'

import landImg1 from '../../assets/images/otherpage/lands/1.webp'
import landImg2 from '../../assets/images/otherpage/lands/2.webp'
import landImg3 from '../../assets/images/otherpage/lands/3.webp'
import landImg4 from '../../assets/images/otherpage/lands/4.webp'

import rescImg1 from '../../assets/images/otherpage/resources/1.svg'
import rescImg2 from '../../assets/images/otherpage/resources/2.svg'
import rescImg3 from '../../assets/images/otherpage/resources/3.svg'
import rescImg4 from '../../assets/images/otherpage/resources/4.svg'

import apecoin from '../../assets/images/otherpage/nfts/apecoin.jpeg'

import Ending from '../../components/Ending/Ending'
import Percentage from './Percentage/Percentage'
import { line2, line1 } from '../Litepaper/Navbar/navbarDB'

const Otherpage = () => {
  return (
    <>
        <Header/>
          <ReactPlayer width='100%' height='100vh' url='https://www.youtube.com/watch?v=qt1equGhkQE&ab_channel=YugaLabs'/>
          <div className={styles.otherpage_sec1}>
            <WorldDescription
              name='BREAK ON THROUGH'
              title='ENTER THE OTHERSIDE'
              text='You got here just in time. Otherside is a gamified, interoperable metaverse currently under development. The game blends mechanics from massively multiplayer online role playing games (MMORPGs) and web3-enabled virtual worlds. Think of it as a metaRPG where the players own the world, your NFTs can become playable characters, and thousands can play together in real time.'
            />
          </div>
          <div className={styles.otherpage_sec3}>
            <WorldDescription
              name='LEAVE YOUR MARK'
              title='FIRST TO THE FUTURE'
              text='Our mission is to make Otherside immersive, interactive, and collaborative in a way that’s never been done before. So in the spirit of Dungeons and Dragons, Otherside will be an always-evolving experience co-created with its players. With an Otherdeed, you can participate in prototype builds, demos, and tests that shape the final game design and experience. Building the future is a team effort — and we want you to be part of our team.'
            />
          </div>
          <div className={styles.otherpage_sec4}>
            <div className={styles.sec4_items}>
              <div className={styles.sec4_item}>
                <img src={landImg1} alt="" />
              </div>
              <div className={styles.sec4_item}>
                <img src={landImg2} alt="" />
              </div>
              <div className={styles.sec4_item}>
                <img src={landImg3} alt="" />
              </div>
              <div className={styles.sec4_item}>
                <img src={landImg4} alt="" />
              </div>
            </div>
          </div>
          <div className={styles.otherpage_sec5}>
            <WorldDescription
              name='OWN A PIECE'
              title='YOUR OTHERDEED AWAITS'
              text='Build on the Otherside, collect resources, create and play on it, and make yourself at home. Otherside will be what you make it, and your Otherdeed will be your key. Your Otherdeed enables you to claim a plot of land when Otherside launches. There will be a total of 200,000 Otherdeeds. The first 100,000 Otherdeeds are available on April 30, 2022. The second 100,000 Otherdeeds will be exclusively rewarded to Voyagers who hold Otherdeeds and contribute to the development of Otherside. For those with Bored Apes or Mutants, your Otherdeed awaits your claim. For all other adventurers, Otherdeeds will be available for sale with ApeCoin.'
            />
          </div>
          <div className={styles.otherpage_sec6}>
            <div className={styles.sec6_content}>
                <Percentage percentage='10%' name='BORED APES' text1='10,000 for BAYC holders (1 BAYC = 1 Otherdeed)' text2='For the Biogenic Swamp at the center of the Otherside'/>
                <Percentage percentage='20%' name='MUTANT APES' text1='20,000 for MAYC holders (1 MAYC = 1 Otherdeed)' text2='For the Chemical Goo on the outskirts of the swamp'/>
                <Percentage percentage='15%' name='DEVELOPERS' text1='15,000 to Yuga and other project developers helping to create Otherside' text2='For the Rainbow Atmos, Cosmic Dream, and Infinite Expanse'/>
                <Percentage percentage='55%' name='ADVENTURERS' text1='55,000 purchased using ApeCoin' text2='For the Rainbow Atmos, Cosmic Dream, and Infinite Expanse'/>
            </div>
          </div>
          <div className={styles.otherpage_sec7}>
            <WorldDescription
              name='INTEROPERABLE'
              title='COME AS YOU ARE'
              text='Bring your own character — Otherside is for everyone. All BAYC, MAYC, BAKC, and CryptoPunks holders will be provided with Otherside-ready 3D models of their NFTs at game launch, available as playable characters. Meebits are coming too, and will be provided with any updates required to make them adventure-ready in Otherside. For everyone else, you’ll be able to import and create your own characters via the ODK.'
            />
            <div className={styles.sec7_container}>
              <div className={styles.sec7_line}>
                {line1.map(l => 
                  <div className={styles.line_item} style={{backgroundImage: `url(${l.img})`}}>
                    <div className={styles.line_item_text}>{l.text}</div>
                  </div>
                )}
              </div>
              <div className={styles.sec7_line}>
              {line2.map(l => 
                  <div className={styles.line_item} style={{backgroundImage: `url(${l.img})`}}>
                    <div className={styles.line_item_text}>{l.text}</div>
                  </div>
                )}
              </div>
            </div>
            <div className={styles.world_sec7}>
              <WorldDescription
                name='MAKE IT YOUR OWN'
                title='CREATE FOR THE OTHERSIDE'
                text='If you like building your own stuff, you can do that too. The ODK will allow creators to make things for the Otherside as well as sell them in the game’s marketplace — not just characters, but also outfits, tools, structures, and even games. Creation comes with perks. Get first dibs on the ODK.'
              />
            </div>
          </div>
          <div className={styles.otherpage_sec8}>
            <div className={styles.sec8_img}>
              <img src={apecoin} alt="" />
            </div>
            <div className={styles.sec8_desc}>
              <WorldDescription
                name='APECOIN'
                title='COIN FOR YOUR VOYAGE'
                text='Otherside doesn’t take cash, credit, or checks. The economy here runs on ApeCoin. Should you aim to purchase an item in Otherside, it’s APE you’ll need.'
              />
            </div>
          </div>
          <div className={styles.otherpage_sec9}>
            <WorldDescription
              name='IMMERSIVE & INTERACTIVE'
              title='GAME-CHANGING TECH'
              text='Otherside is where the impossible happens. With the power of Improbable’s M2 technology, 10,000+ players will be able to interact simultaneously in a single place, connect with natural voice chat (even in crowds of thousands), experience rich, immersive gameplay supported by AI and physics, and move between metaverses. Otherside players will break through barriers in scale, bandwidth, and rendering as they create new types of gameplay and social possibilities. Just like processing power in your PC can limit the quality of a game’s graphics, metaverses are limited in their scale by how many communication operations or ‘ops’ per second they can process. Typical online game worlds can handle around 10,000 operations per second. Otherside will be able to handle more than half a billion operations per second, which will power new gameplay and interactions never before possible at an unprecedented scale. It’ll also solve problems in bandwidth and rendering, using machine learning to allow huge crowds to all look different, allowing you and everybody else to bring your own external NFT character to Otherside'
            />
                          <div className={styles.resources}>
                <div className={styles.resources_item}>
                  <img src={rescImg1} alt="" />
                  <div className={styles.resources_item_title}>10,000+ PLAYERS</div>
                  <div className={styles.resources_item_subtitle}>10,000+ people interacting simultaneously in a single location</div>
                </div>
                <div className={styles.resources_item}>
                  <img src={rescImg2} alt="" />
                  <div className={styles.resources_item_title}>SPEAK UP TOGETHER</div>
                  <div className={styles.resources_item_subtitle}>In-world natural voice chat for thousands (making it easier to hear those you are facing)</div>
                </div>
                <div className={styles.resources_item}>
                  <img src={rescImg3} alt="" />
                  <div className={styles.resources_item_title}>PHYSICS X AI</div>
                  <div className={styles.resources_item_subtitle}>Millions of complex, interactive entities in a single world supported with physics and AI</div>
                </div>
                <div className={styles.resources_item}>
                  <img src={rescImg4} alt="" />
                  <div className={styles.resources_item_title}>NEXT LEVEL SOCIAL</div>
                  <div className={styles.resources_item_subtitle}>Incredible live interaction between players</div>
                </div>
              </div>
          </div>
        <Ending/>
        <Footer/>
    </>
  )
}

export default Otherpage