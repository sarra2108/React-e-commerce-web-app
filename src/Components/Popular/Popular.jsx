import React from 'react';
import './Popular.css';
import aboutImage from '../Assets/Picture2.jpg'; // Import your image here

const Popular = () => {
  return (
    <div className='popular'>
      <h1>ABOUT US</h1>
      <hr />
      <div className="popular-item">
        <img src={aboutImage} alt="About us" />
        <p>Blessings of Carthage is an e-commerce platform dedicated to providing Tunisian artisans with a marketplace to showcase their unique creations, and offering consumers a distinctive and immersive shopping experience. The platform connects artisans with a global audience, allowing them to share their heritage and craftsmanship with the world. Consumers can explore a wide variety of handcrafted products, learn about the artisans behind each piece, and make purchases with ease and confidence.</p>
      </div>
    </div>
  );
}

export default Popular;
