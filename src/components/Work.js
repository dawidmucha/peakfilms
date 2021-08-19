import React from 'react'
import styles from './Work.module.scss'

const Work = () => {
    return (
        <div className={styles.container}>
            <h1>
                REALIZACJE
                <hr />
            </h1>

            <div className={styles.categories}>
                <div className={styles.documentaries}>
                    <h3>FILMY DOKUMENTALNE</h3>
                    <div className={styles.videos}>
                        <iframe title='Gojiczek Zielony - Wokół Wielkanocy' src="https://www.youtube.com/embed/o9NHpzh64Zo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
                        <iframe title='HANSA BRANDENBURG C1 - ZABYTKOMANIA 2019' src="https://www.youtube.com/embed/_UUPx79ea1A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
                        <iframe title="Mikołaje w Trójwsi Beskidzkiej" src="https://www.youtube.com/embed/i-7hsyU9PMk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                <div className={styles.tourism}>
                    <h3>TURYSTYKA</h3>
                    <div className={styles.videos}>
                        <iframe title='Gosciniec Równica' src="https://www.youtube.com/embed/TWAKTzUfJGQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
                        <iframe title='Niko Travel - Kaštel' src="https://www.youtube.com/embed/vWYvrsVia_E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
                        <iframe title='Issa Tour - Vis' src="https://www.youtube.com/embed/alfztuUyZe4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
                    </div>
                </div>
                <div className={styles.shows}>
                    <h3>RELACJE Z IMPREZ</h3>
                    <div className={styles.videos}>
                        <iframe title='Otwarcie Sezonu Uzdrowiskowego 2019 - Ustroń' src="https://www.youtube.com/embed/mZM-dYbaUy4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
                        <iframe title='XV Zimowy Wjazd na Równicę' src="https://www.youtube.com/embed/qnyPeg16Pgo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
                        <iframe title='Beskidy WinterGo' src="https://www.youtube.com/embed/nUd_0gr6EFI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
                    </div>
                </div>
                <div className={styles.adverts}>
                    <h3>SPOTY REKLAMOWE</h3>
                    <div className={styles.videos}>
                        <iframe title="????" src="https://www.youtube.com/embed/15pOG2OCgzY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <iframe title='Brudne Tatuaże - Bartłomiej Błanik' src="https://www.youtube.com/embed/bwmjtLb0xto" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
                        <iframe title='Phoenix Poi Group FireShow' src="https://www.youtube.com/embed/4uHayGyXIEc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work