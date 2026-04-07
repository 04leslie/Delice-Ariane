import React from 'react'
import Hero from './components/Hero.jsx'
import Packages from './components/Packages.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Contact from './components/Contact.jsx'
import './styles/global.css'
function App() {

  return (
    <div className='app-container'>
      <Hero />
      <Packages />
      <Services />
      <About />
      <Contact />
    </div>
  )
}

export default App
