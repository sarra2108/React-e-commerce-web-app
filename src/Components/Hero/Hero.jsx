import React from 'react'
import './Hero.css'


import hero_image from '../Assets/Picture1.jpg'

const Hero = () => {
  return (
   
      <div className="hero">
        <img src={hero_image} alt="" />
      </div>
 
  )
}

export default Hero
