import React from 'react'
import styles from './Clients.module.scss'
import logo1 from '../resources/1.png'
import logo2 from '../resources/2.png'
import logo3 from '../resources/3.png'
import logo4 from '../resources/4.png'
import logo5 from '../resources/5.png'

const Clients = () => {
    return (
        <div className={styles.container}>
            <div>clients</div>
            <div className={styles.logos}>
                <img src={logo1} alt='logo1' />
                <img src={logo2} alt='logo2' />
                <img src={logo3} alt='logo3' />
                <img src={logo4} alt='logo4' />
                <img src={logo5} alt='logo5' />
                <img src={logo1} alt='logo1' />
                <img src={logo2} alt='logo2' />
                <img src={logo3} alt='logo3' />
                <img src={logo4} alt='logo4' />
                <img src={logo5} alt='logo5' />
                <img src={logo1} alt='logo1' />
                <img src={logo2} alt='logo2' />
                <img src={logo3} alt='logo3' />
                <img src={logo4} alt='logo4' />
                <img src={logo5} alt='logo5' />
            </div>
        </div>
    )
}

export default Clients