import React from 'react'
import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <footer className={styles.container}>
            <h6 className={styles.content}>
                by peakfilms & <a href='https://github.com/dawidmucha'>dawid mucha</a>
            </h6>
        </footer>
    )
}

export default Footer