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
                        <iframe title='Ciągle Tu Jesteśmy' src="https://www.youtube.com/embed/9birAqmEjLo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <iframe title='HANSA BRANDENBURG C1 - ZABYTKOMANIA 2019' src="https://www.youtube.com/embed/_UUPx79ea1A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <iframe title='Cisza | Wisła - Impresja dokumentalna' src="https://www.youtube.com/embed/fUCDyCaGEyY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                <div className={styles.tourism}>
                    <h3>TURYSTYKA</h3>
                    <div className={styles.videos}>
                        <iframe title='Gosciniec Równica' src="https://www.youtube.com/embed/TWAKTzUfJGQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <iframe title='Niko Travel - Kaštel' src="https://www.youtube.com/embed/vWYvrsVia_E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <iframe title='Issa Tour - Vis' src="https://www.youtube.com/embed/alfztuUyZe4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                <div className={styles.shows}>
                    <h3>RELACJE Z IMPREZ</h3>
                    <div className={styles.videos}>
                        <iframe title='Festiwal Sztuki Ulicznej - Puzzle Kultury - Wisła 2019' src="https://www.youtube.com/embed/ThCmgXcEBjc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <iframe title='Park z Tradycją - Zapowiedź Wiślańskich Dożynek' src="https://www.youtube.com/embed/ndKUgCjRMn4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <iframe title='Jarmark z Tradycją - Wisła' src="https://www.youtube.com/embed/PMAzDGrffRM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                <div className={styles.adverts}>
                    <h3>SPOTY REKLAMOWE</h3>
                    <div className={styles.videos}>
                        <iframe title='Brudne Tatuaże - Bartłomiej Błanik' src="https://www.youtube.com/embed/bwmjtLb0xto" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <iframe title='Phoenix Poi Group FireShow' src="https://www.youtube.com/embed/4uHayGyXIEc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <iframe title='Rajdowy Ustroń - Zapowiedź' src="https://www.youtube.com/embed/DkW8Ymgc-OM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work