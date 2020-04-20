import React from 'react'
import styles from './Jumbo.module.css'
import logo from '../resources/logo.png'

const Jumbo = () => {
    return (
        <div className={styles.container}>
            <img src={logo} alt='logo' className={styles.logo} />
        </div>
    )
}

export default Jumbo