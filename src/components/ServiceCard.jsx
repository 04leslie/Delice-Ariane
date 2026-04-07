import React from 'react'
import '../styles/global.css'

function ServiceCard({ image, title, description, linkText, linkHref }) {
  return (
    <div className='card' style={{ backgroundImage: `url(${image})` }}>
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={linkHref} target="_blank" rel="noopener noreferrer">{linkText}</a>
    </div>
  )
}

export default ServiceCard