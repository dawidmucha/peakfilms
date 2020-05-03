import React from 'react'
import styles from './Contact.module.scss'

const Contact = () => {
    return (
        <div>
            <form>
                <label>
                    <p>email</p>
                    <input type='text' placeholder='email' />
                </label>
                <label>
                    <p>treść</p>
                    <input type='textarea' placeholder='' />
                </label>
                <button type='submit'>wyślij</button>
            </form>

        </div>
    )
}

export default Contact