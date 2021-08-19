import React from 'react'
import fb_w from '../resources/icons/facebook-w.svg'
import ig_w from '../resources/icons/instagram-w.svg'
import yt_w from '../resources/icons/youtube-w.svg'
import fb_g from '../resources/icons/facebook-g.svg'
import ig_g from '../resources/icons/instagram-g.svg'
import yt_g from '../resources/icons/youtube-g.svg'
import styles from './Socials.module.scss'

const Socials = ({ isGolden }) => {
    const yt = isGolden ? yt_g : yt_w
    const fb = isGolden ? fb_g : fb_w
    const ig = isGolden ? ig_g : ig_w

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