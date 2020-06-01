import React from 'react'
import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <footer className={styles.container}>
            <p className={styles.content}>
                by <a href='https://github.com/dawidmucha'>dawid mucha</a>
            </p>
        </footer>
    )
}

export default Footer