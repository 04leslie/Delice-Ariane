import React from 'react'
import BoxOne from '../assets/Rectangle5.png'
import BoxTwo from '../assets/Rectangle6.png'
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
                  <p>2 Meat Pancakes</p>
                  <p>4 Meat Pie with sauce </p>
                  <p>3 Cup cakes</p>
                  <p>3 Soft Cookies </p>
                  <p>8 Fluffy Doghnuts</p>
                  <p>+ 1 Rose flower</p>
                  <p className='total'>Total : <span>25€</span></p>
                  <a href="https://wa.me/c/4915738200469" target="_blank" rel="noopener noreferrer">Add To Cart</a>
                </div>
            </div>
            <div className='box'>
                <div className='details'>
                  <h3>Valentines Package: <em>My Love</em></h3>
                  <p>2 Fish Pancakes</p>
                  <p>4 Meat Pie</p>
                  <p>Sauce and chili pepper</p>
                  <p>A sweet little note</p>
                  <p className='total'>Total : <span>13€</span></p>
                  <a href="https://wa.me/c/4915738200469" target="_blank" rel="noopener noreferrer">Add To Cart</a>
                </div>
                <img src={BoxTwo} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Packages