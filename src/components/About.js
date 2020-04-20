import React from 'react'
import styles from './About.module.scss'

const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1>O NAS</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis semper erat, eget porttitor ex. Phasellus gravida sed enim pulvinar auctor. Nullam id egestas nibh. Phasellus ultricies convallis risus, eget pulvinar sem dignissim a. Maecenas faucibus convallis erat, sit amet fringilla eros fermentum aliquam. Etiam dignissim orci lectus, sit amet tincidunt urna consequat id. Maecenas tincidunt in massa vel iaculis. Praesent quis cursus erat, eu commodo erat. Duis eu erat sit amet mi interdum aliquam ut dignissim nisl. In elementum orci eget quam feugiat volutpat. Aenean pretium, purus eu ultrices vestibulum, leo quam ullamcorper neque, sed viverra sapien massa eu ex. Praesent in nunc nec nisl convallis facilisis sed ut odio. Integer sed varius turpis, et sagittis justo. Maecenas nisl mi, condimentum non cursus et, tincidunt sed odio.
                </p>
            </div>
            <div className={styles.picture}>
                <img alt="portret"></img>
            </div>
        </div>
    )
}

export default About