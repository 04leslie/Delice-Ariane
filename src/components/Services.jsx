import React from 'react'
import ServiceCard from './ServiceCard.jsx'
import jollofpack from '../assets/jollofpack.jpg'
import meatpie from '../assets/meatpie.jpeg'
import cupcakes from '../assets/cupcakes.jpeg'
import pancakes from '../assets/pancakes.jpg'
import puffpuff from '../assets/puffpuff.jpeg'

const servicesData = [
  {
    id: 1,
    image: jollofpack,
    title: 'Jollof Rice',
    description: 'A rich and flavorful West African classic, cooked in a perfectly spiced tomato sauce and served with tender, juicy accompaniments. Every bite is bold, satisfying, and unforgettable.',
    linkText: 'Order Now',
    linkHref: 'https://wa.me/c/4915738200469',
  },
  {
    id: 2,
    image: meatpie,
    title: 'Meat Pie',
    description: 'Golden, flaky pastry filled with a savory blend of seasoned minced meat and vegetables. Baked to perfection for a deliciously crispy outside and a warm, hearty inside.',
    linkText: 'Order Now',
    linkHref: 'https://wa.me/c/4915738200469',
  },
  {
    id: 3,
    image: cupcakes,
    title: 'Cupcakes',
    description: 'Light, moist, and beautifully topped, our cupcakes are baked fresh daily and crafted to bring a touch of sweetness and joy to every moment.',
    linkText: 'Order Now',
    linkHref: 'https://wa.me/c/4915738200469',
  },
  {
    id: 4,
    image: pancakes,
    title: 'Pancakes',
    description: 'Soft, fluffy pancakes made fresh and filled with your choice of rich chocolate, savory meat, or flavorful fish. A perfect balance of sweetness and taste in every bite.',
    linkText: 'Order Now',
    linkHref: 'https://wa.me/c/4915738200469',
  },
  {
    id: 5,
    image: puffpuff,
    title: 'Puff Beignets',
    description: 'Soft, airy, and lightly golden, these classic puff-puffs are deep-fried to perfection and dusted for a delightful, melt-in-your-mouth experience.',
    linkText: 'Order Now',
    linkHref: 'https://wa.me/c/4915738200469',
  },
]

function Services() {
  return (
    <div id="services" className="services">
      <h1 className='section-heading'>Our Services</h1>
      <div className="services-grid">
        {servicesData.map((service) => (
          <ServiceCard
            key={service.id}
            image={service.image}
            title={service.title}
            description={service.description}
            linkText={service.linkText}
            linkHref={service.linkHref}
          />
        ))}
      </div>
    </div>
  )
}

export default Services