import React from 'react'
import styles from './Contact.module.scss'

const Contact = () => {
    return (
        <div className={styles.container}>
            <form action="mailto:kontakt@peakfilms.pl">
                <div className={styles.title}>
                    <h2>KONTAKT</h2>
                    <hr />
                </div>
                <label className={styles.email}>
                    <p>email</p>
                    <input type='text' placeholder='' />
                </label>
                <label className={styles.message}>
                    <p>treść</p>
                    <textarea placeholder='' />
                </label>
                <button type='submit' className={styles.submit}>wyślij</button>
            </form>

        </div>
    )
}

export default Contact