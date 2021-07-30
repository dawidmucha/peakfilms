import React from 'react'
import styles from './About.module.scss'
import portrait from '../../resources/portrait.jpg'

const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.window}>
                <div className={styles.description}>
                    <h1>
                        O NAS
                        <hr />
                    </h1>
                    <p className={styles.text}>
                        Jesteśmy z gór, uwielbiamy przeżywać emocje związane ze zdobywaniem szczytów. Ta sama idea towarzyszy nam podczas kręcenia filmów. Nieważne czy mamy do czynienia z krótkim klipem reklamowym, teledyskiem, zdjęciami z drona, czy długim filmem dokumentalnym - chcemy, żeby każde zlecenie było dla nas wyzwaniem. Dlatego ciągle inwestujemy w sprzęt i nowe rozwiązania – wierzymy, że zawsze znajdzie się kolejny szczyt do zdobycia.
                    </p>
                </div>
                <div className={styles.portrait}>
                    <img alt="portret" src={portrait} />    
                </div>
                <div className={styles.rightSpace}></div>
            </div>
        </div>
    )
}

export default About