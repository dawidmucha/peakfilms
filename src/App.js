import React from 'react'
import Jumbo from './components/Jumbo'
import About from './components/About'
import Work from './components/Work'
import Clients from './components/Clients'
import Contact from './components/Contact'
import Footer from './components/Footer'
import styles from './App.module.scss'
import './App.css'

function App() {
  return (
    <div className={styles.app}>
      <Jumbo />
      <About />
      <Work />
      <Clients />
      <Contact />
      <Footer />
    </div>
  )
}

export default App