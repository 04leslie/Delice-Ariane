import React from 'react'
import BoxOne from '../assets/rectangle5.png'
import BoxTwo from '../assets/rectangle6.png'
import '../styles/global.css'

function Packages() {
  return (
    <div id="packages" className="packages">
        <h1 className='section-heading'>Our Packages</h1>
        <div>
            <div className='box'>
                <img src={BoxOne} alt="" />
                <div className='details'>
                  <h3>Valentines Package: <em>My Love</em></h3>
                  <p>2 Crêpes à la viande</p>
                  <p>4 Pastels à la viande et sa sauce </p>
                  <p>3 Cup cakes</p>
                  <p>3Cookies mouelleux </p>
                  <p>8 Beignets soufflés</p>
                  <p>+ 1 Rose</p>
                </div>
            </div>
            <div className='box'>
                <div className='details'>
                  <h3>Valentines Package: <em>My Love</em></h3>
                  <p>2 Crêpes à la viande</p>
                  <p>4 Pastels à la viande et sa sauce </p>
                  <p>3 Cup cakes</p>
                  <p>3Cookies mouelleux </p>
                  <p>8 Beignets soufflés</p>
                  <p>+ 1 Rose</p>
                </div>
                <img src={BoxTwo} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Packages