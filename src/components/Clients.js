import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from './Clients.module.scss'

import logo11 from '../resources/clients/1/1-tkb.png'
import logo12 from '../resources/clients/1/2-orawskie.png'
import logo13 from '../resources/clients/1/3-browar.png'
import logo14 from '../resources/clients/1/4-noszak.png'
import logo15 from '../resources/clients/1/5-ustron.png'
import logo16 from '../resources/clients/1/6-prazakowka.png'
import logo17 from '../resources/clients/1/7-polodnie-events.png'
import logo18 from '../resources/clients/1/8-skolnity.png'
import logo21 from '../resources/clients/2/1-wisla.png'
import logo22 from '../resources/clients/2/2-wck.png'
import logo23 from '../resources/clients/2/3-rdzawe.png'
import logo24 from '../resources/clients/2/4-tatuaze.png'
import logo25 from '../resources/clients/2/5-gastromix.png'
import logo26 from '../resources/clients/2/6-issatour.png'
import logo27 from '../resources/clients/2/7-cieszyn.png'
import logo28 from '../resources/clients/2/8-szczyrk.png'
import logo29 from '../resources/clients/2/9-brenna.png'

const responsive = {
    desktop: {
      breakpoint: { max: 2160, min: 768 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1
    }
  };

const Clients = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>
                    ZAUFALI NAM
                    <hr />
                </h1>
            </div>
            <div className={styles.clientsText}>
                Poznaj firmy i instytucje, które nam zaufały i dołącz do ich grona.
            </div>
            <Carousel responsive={responsive} id={styles.carousel}
                swipeable={true}
                draggable={true}
                keyBoardControl={true}
            >
                <div className={styles.slide1} id='slide1'>
                    <a target="_blank" rel="noopener noreferrer" href='https://browarcieszyn.pl/'>
                        <img src={logo13} alt='browar cieszyn' id='logo13' />
                        </a>
                    <a target='_blank' rel='noopener noreferrer' href='https://browarcieszyn.pl/nasze-piwo/noszak?o=ber&i=35'>
                        <img src={logo14} alt='piwo noszak' id='logo14' />
                    </a>
                        <div></div>
                    <a target='_blank' rel='noopener noreferrer' href='https://tkb.art.pl/'>
                        <img src={logo11} alt='tydzien kultury beskidzkiej' id='logo11' />
                    </a>
                    <a target='_blank' rel='noopener noreferrer' href='https://ockorawa.pl/'>
                        <img src={logo12} alt='orawskie centrum kultury' id='logo12' />
                    </a>
                    <a target='_blank' rel='noopener noreferrer' href='https://ustron.pl/pl'>
                        <img src={logo15} alt='miasto ustroń' id='logo15' />
                    </a>
                    <a target='_blank' rel='noopener noreferrer' href='https://mdk.ustron.pl/'>
                        <img src={logo16} alt='prażakówka' id='logo16' />
                    </a>
                    <div></div>
                    <a target='_blank' rel='noopener noreferrer' href='http://www.poludnieevents.pl/'>
                        <img src={logo17} alt='południe events' id='logo17' />
                    </a>
                    <a target='_blank' rel='noopener noreferrer' href='https://skolnity.pl/'>
                        <img src={logo18} alt='skolnity' id='logo18' />
                    </a>
                </div>
                <div className={styles.slide2} id='slide2'>
                    <a target="_blank" className={styles.pair1} rel="noopener noreferrer" href='https://rdzawe-diamenty.com/'>
                        <img src={logo23} alt='rdzawe diamenty' id='logo23' />
                    </a>
                    <a target='_blank' className={styles.pair2} rel='noopener noreferrer' href='https://www.instagram.com/pracownia.tattoo/'>
                        <img src={logo24} alt='krakowska pracownia tatuażu' id='logo24' />
                    </a>
                    <a target='_blank' className={styles.pair3} rel='noopener noreferrer' href='https://www.wisla.pl/'>
                        <img src={logo21} alt='miasto wisła' id='logo21' />
                    </a>
                    <a target='_blank' className={styles.pair4} rel='noopener noreferrer' href='https://www.wisla.pl/mieszkaniec/wislanskie-centrum-kultury'>
                        <img src={logo22} alt='wiślańskie centrum kultury' id='logo22' />
                    </a>
                    <a target='_blank' className={styles.pair5} rel='noopener noreferrer' href='https://gastromix.pl/'>
                        <img src={logo25} alt='gastormix' id='logo25' />
                    </a>
                    <a target='_blank' className={styles.pair6} rel='noopener noreferrer' href='http://www.issatour.holiday/'>
                        <img src={logo26} alt='issa tour' id='logo26' />
                    </a>
                    <a target='_blank' className={styles.last1} rel='noopener noreferrer' href='https://www.cieszyn.pl/'>
                        <img src={logo27} alt='cieszyn' id='logo27' />
                    </a>
                    <a target='_blank' className={styles.last2} rel='noopener noreferrer' href='https://www.szczyrk.pl/'>
                        <img src={logo28} alt='szczyrk' id='logo28' />
                    </a>
                    <a target='_blank' className={styles.last3} rel='noopener noreferrer' href='https://www.brenna.org.pl/'>
                        <img src={logo29} alt='gmina brenna' id='logo29' />
                    </a>
                </div>
            </Carousel>
        </div>
    )
}

export default Clients