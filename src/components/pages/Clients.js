import React from 'react'
import styles from './Clients.module.scss'
import logo1 from '../../resources/clients/1-cieszyn.png'
import logo2 from '../../resources/clients/2-ustron.png'
import logo3 from '../../resources/clients/3-wisla.png'
import logo4 from '../../resources/clients/4-browar-cieszyn.png'
import logo5 from '../../resources/clients/5-wislanskie-ck.png'
import logo6 from '../../resources/clients/6-rdzawe-diamenty.png'
import logo7 from '../../resources/clients/7-krakowska-pracownia-tat.png'
import logo8 from '../../resources/clients/8-phoenix.png'
import logo9 from '../../resources/clients/9-polodnie-events.png'
import logo10 from '../../resources/clients/10-issa-tour.png'
import logo11 from '../../resources/clients/11-skolnity.png'
import logo12 from '../../resources/clients/12-ski-carv.png'
import logo13 from '../../resources/clients/13-gastro-mix.png'

const Clients = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>
                    ZAUFALI NAM
                    <hr />
                </h1>
            </div>
            <div className={styles.logos}>
                <img src={logo1} alt='logo1' />
                <img src={logo2} alt='logo2' />
                <img src={logo3} alt='logo3' />
                <img src={logo4} alt='logo4' />
                <img src={logo5} alt='logo5' />
                <img src={logo6} alt='logo6' />
                <img src={logo7} alt='logo7' />
                <img src={logo8} alt='logo8' />
                <img src={logo9} alt='logo9' />
                <img src={logo10} alt='logo10' />
                <img src={logo11} alt='logo11' />
                <img src={logo12} alt='logo12' />
                <img src={logo13} alt='logo13' />
            </div>
        </div>
    )
}

export default Clients