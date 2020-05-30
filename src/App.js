import React from 'react'
import Jumbo from './components/pages/Jumbo'
import About from './components/pages/About'
import Work from './components/pages/Work'
import Clients from './components/pages/Clients'
import Contact from './components/pages/Contact'
import Footer from './components/pages/Footer'
import Socials from './components/Socials'
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
        <div className={styles.componentSocials}>
          <Socials />
        </div>
        <Footer />
        <GoogleReCaptcha onVerify={console.log('i am not a robot')} />
      </GoogleReCaptchaProvider>
    </div>
  )
}

export default App