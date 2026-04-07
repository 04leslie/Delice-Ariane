import React, { useState } from 'react'
import logo from '../assets/transparent.png'
import '../styles/global.css'

function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div id="hero" className="hero">
        <div className="navbar">
            <div>
                <img className='logo' src={logo} alt="Delice d'Ariane Logo" />
            </div>
            <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <a href="#hero" onClick={() => setIsMenuOpen(false)}>Home</a>
                    <a href="#packages" onClick={() => setIsMenuOpen(false)}>Our Packages</a>
                    <a href="#services" onClick={() => setIsMenuOpen(false)}>Our Services</a>
                    <a href="#about" onClick={() => setIsMenuOpen(false)}>About Us</a>
                    <a href="#contact" className='button' onClick={() => setIsMenuOpen(false)}>Contact Us</a>
            </div>
            <div className="hamburger" onClick={toggleMenu}>
                <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
                <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
                <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
            </div>
        </div>
      <div className="hero-content">
        <h1>Good Food, Great Moments.<br />Delight in every Bite.</h1>
        <p>Experience refined flavors, authentic dishes with true african taste. We serve food <br /> that brings people  together. More than a meal, it is a memory</p> <br />
        <a href="#services" className='button'>Explore Our Services</a>
      </div>
    </div>
  )
}

export default Hero