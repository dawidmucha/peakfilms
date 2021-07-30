import React from 'react'
import fb from '../resources/icons/facebook.svg'
import ig from '../resources/icons/instagram.svg'
import yt from '../resources/icons/youtube.svg'
import styles from './Socials.module.scss'

const Socials = () => {
    return (
        <div className={styles.container}>
                <a href='https://www.facebook.com/peakfilms/' target='_blank' rel="noopener noreferrer">
            <div>
                    <img src={fb} alt='link-to-facebook' />
            </div>
                </a>
                
            <a href='https://www.instagram.com/_peakfilms/' target='_blank' rel="noopener noreferrer">
            <div>
                <img src={ig} alt='link-to-instagram' />
            </div>
            </a>
                
            <a href='https://www.youtube.com/channel/UCnUJM8rj5HiPEsdBkJOs9nw' target='_blank' rel="noopener noreferrer">
            <div>
                <img src={yt} alt='link-to-youtube' />
            </div>
            </a>
                
            
            
        </div>
    )
}

export default Socials