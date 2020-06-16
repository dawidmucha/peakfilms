import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from './Clients.module.scss'

const responsive = {
    desktop: {
      breakpoint: { max: 2160, min: 768 },
      items: 5
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 3
    }
  };

const Clients = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>
                    ZAUFALI NAM
                    <hr />
                </h1>
            </div>
            <Carousel
                className={styles.carousel}
                swipeable={true}
                draggable={true}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={5000}
                keyBoardControl={true}
                customTransition="transform 100ms ease-in-out"
                transitionDuration={100}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                itemClass="carousel-item-padding-40-px"
                centerMode={true}
            >
                <a target="_blank" rel="noopener noreferrer" href='https://www.facebook.com/CieszynRobiWrazenie/'>
                    <div className={styles.imageContainer} id='logo1'><p>Cieszyn Robi Wrażenie</p></div>
                </a>
                <a target="_blank" rel="noopener noreferrer"  href='http://ustron.pl/aktualnosci#/newsy/'>
                    <div className={styles.imageContainer} id='logo2'><p>Ustroń - Góry Radości</p></div>
                </a>
                <a target="_blank" rel="noopener noreferrer"  href='https://wisla.pl/'>
                    <div className={styles.imageContainer} id='logo3'><p>Miasto Wisła</p></div>
                </a>
                <a target="_blank" rel="noopener noreferrer"  href='https://www.browarcieszyn.pl/'>
                    <div className={styles.imageContainer} id='logo4'><p>Browar Zamkowy Cieszyn</p></div>
                </a>
                <a target="_blank" rel="noopener noreferrer"  href='https://www.facebook.com/WCKWisla'>
                    <div className={styles.imageContainer} id='logo5'><p>Wiślańskie Centrum Kultury</p></div>
                </a>
                <a target="_blank" rel="noopener noreferrer"  href='https://www.facebook.com/rdzawe.diamenty/'>
                    <div className={styles.imageContainer} id='logo6'><p>Rdzawe Diamenty</p></div>
                </a>
                <a target="_blank" rel="noopener noreferrer"  href='https://www.facebook.com/pracownia.tattoo.krk/'>
                    <div className={styles.imageContainer} id='logo7'><p>Krakowska Pracownia Tatuażu</p></div>
                </a>
                <a target="_blank" rel="noopener noreferrer"  href='http://phoenix-group.pl/'>
                    <div className={styles.imageContainer} id='logo8'><p>Grupa Phoenix</p></div>
                </a>
                <a target="_blank" rel="noopener noreferrer"  href='http://www.poludnieevents.pl/'>
                    <div className={styles.imageContainer} id='logo9'><p>Południe Events</p></div>
                </a>
                <a target="_blank" rel="noopener noreferrer"  href='http://www.issatour.holiday/'>
                    <div className={styles.imageContainer} id='logo10'><p>Issa Tour</p></div>
                </a>
                <a target="_blank" rel="noopener noreferrer"  href='https://skolnity.pl/'>
                    <div className={styles.imageContainer} id='logo11'><p>Skolnity</p></div>
                </a>
                <a target="_blank" rel="noopener noreferrer"  href='https://www.skicarv.pl/'>
                    <div className={styles.imageContainer} id='logo12'><p>Ski-Carv</p></div>
                </a>
                <a target="_blank" rel="noopener noreferrer"  href='https://gastromix.pl/'>
                    <div className={styles.imageContainer} id='logo13'><p>Gastro-Mix</p></div>
                </a>
            </Carousel>
        </div>
    )
}

export default Clients