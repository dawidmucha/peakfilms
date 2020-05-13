import React, { useEffect } from 'react'
import styles from './Contact.module.scss'

const Contact = () => {
    return (
        <div className={styles.container}>
            <form>
                <h2>KONTAKT</h2>
                <label className={styles.email}>
                    <p>email</p>
                    <input type='text' placeholder='email' />
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