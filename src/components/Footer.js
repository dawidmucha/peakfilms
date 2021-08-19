import React from 'react'
import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <footer className={styles.container}>
            <h6 className={styles.content}>
            <div className={styles.credits}>
                Icons made by 
                <a href="https://www.flaticon.com/authors/those-icons" title="Those Icons">Those Icons</a>, 
                <a href="https://www.flaticon.com/authors/becris" title="Becris"> Becris</a>, 
                <a href="https://www.flaticon.com/authors/freepik" title="Freepik"> Freepik</a> & 
                <a href="https://www.flaticon.com/authors/bqlqn" title="bqlqn"> bqlqn </a> 
                from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
            </div>
            <div className={styles.author}>
                design by peakfilms, code by <a href='https://github.com/dawidmucha'>dawid mucha</a>
            </div>
            </h6>
        </footer>
    )
}

export default Footer