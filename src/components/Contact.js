import React from 'react'
import location from '../resources/icons/location.svg'
import email from '../resources/icons/email.svg'
import phone from '../resources/icons/phone.svg'
import styles from './Contact.module.scss'

const Contact = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h2>
                    KONTAKT
                    <hr />
                </h2>
            </div>
            <form action="mailto:kontakt@peakfilms.pl">
                <label for='name'>
                    <p>Imię:</p>
                    <input type='text' id='name' />
                </label>
                <label for='email'>
                    <p>Email:</p>
                    <input type='text' id='email' />
                </label>
                <label for='title'>
                    <p>Tytuł:</p>
                    <input type='text' id='title' />
                </label>
                <label className={styles.labelMessage} for='message'>
                    <p>Treść:</p>
                    <textarea rows='8' id='message' />
                </label>
                <button type='submit' className={styles.submit}>wyślij</button>
                
                <div className={styles.icons}>
                    <div className={styles.email}>
                        <img src={email} alt='phone' />
                        <p>kontakt@peakfilms.pl</p>
                    </div>

                    <div className={styles.phone}>
                        <img src={phone} alt='phone' />
                        <p><span className={styles.phonePart}>797</span><span className={styles.phonePart}>649</span><span className={styles.phonePart}>639</span></p>
                    </div>

                    <div className={styles.location}>
                        <img src={location} alt='location' />
                        <p>Ustroń</p>
                    </div>
                </div>
            </form>

            <p className={styles.formula}>Zapraszamy do kontaktu w sprawie wycen lub współpracy!</p>
        </div>
    )
}

export default Contact