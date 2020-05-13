import React from 'react'
import Jumbo from './components/Jumbo'
import About from './components/About'
import Work from './components/Work'
import Clients from './components/Clients'
import Contact from './components/Contact'
import Footer from './components/Footer'
import styles from './App.module.scss'
import { GoogleReCaptchaProvider, GoogleReCaptcha } from 'react-google-recaptcha-v3'
import './App.css'

function App() {
  return (
    <div className={styles.app}>
      <GoogleReCaptchaProvider reCaptchaKey={process.env.REACT_APP_SITE_KEY}>
        <Jumbo />
        <About />
        <Work />
        <Clients />
        <Contact />
        <Footer />
        <GoogleReCaptcha onVerify={console.log('i am not a robot')} />
      </GoogleReCaptchaProvider>
    </div>
  )
}

export default App