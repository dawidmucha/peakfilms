import React from 'react'
import styles from './Jumbo.module.scss'
import Socials from '../Socials'
import logo from '../../resources/icons/logo.svg'

const Jumbo = () => {
    return (
        <div className={styles.container}>
            <img src={logo} alt='logo' className={styles.logo} />
            <div className={styles.componentSocials}>
                <Socials />
            </div>
        </div>
    )
}

export default Jumbo