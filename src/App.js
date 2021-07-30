import './App.css'

import Jumbo from './components/Jumbo'
import About from './components/About'
import Work from './components/Work'
import Clients from './components/Clients'
import Socials from './components/Socials'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Jumbo />
      <About />
      <Work />
      <Clients />
      <div id='socials-container'>
        <p id='socials-container-text'>Skontaktuj się z nami przez nasze media społecznościowe!</p>
        <Socials />
      </div>

      <Footer />
    </div>
  );
}

export default App;
