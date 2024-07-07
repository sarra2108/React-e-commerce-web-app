// src/pages/Customize.js
import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import './Customize.css'; // Import the CSS file for styling

const Customize = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams(); // Get the product ID from the URL
  const product = all_product.find(product => product.id === parseInt(productId));

  const [formData, setFormData] = useState({
    color: '',
    color2: '',
    shape: '',
    dimension: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  if (!product) {
    return <p>No product found or customization not available for this product</p>;
  }

  return (
    <div className="customize-container">
      <div className="product-display">
        <h1>You can also customize the product </h1>
        <hr className="short-hr" />
      </div>
      <form className="customize-form" onSubmit={handleSubmit}>
        {(product.id === 1 || product.id === 2 || product.id === 3) && (
          <>
            <label className="input">
              
              Choose color of the vase:
              <input 
                type="text"
                name="color"
                value={formData.color}
                onChange={handleChange}
                placeholder="Exp: White"
              />
            </label>
            <label className="input">
              Choose color of pattern:
              <input
                type="text"
                name="color2"
                value={formData.color2}
                onChange={handleChange}
                placeholder="Exp: Blue"
              />
            </label>
            <label className="input">
              Add a personalized message:
              <input
                type="text"
                name="color2"
                value={formData.color2}
                onChange={handleChange}
                placeholder="Exp: Happy Birthday"
              />
            </label>
            <div className="fieldset">
              <label>Choose Shape:</label>
              <div className="radio-group">
                {product.shapes.map((shape, index) => (
                  <label key={index}>
                    <input
                      type="radio"
                      name="shape"
                      value={shape}
                      onChange={handleChange}
                    />
                    {shape}
                  </label>
                ))}
              </div>
            </div>
          </>
        )}

        {(product.id === 4 || product.id === 5) && (
          <div className="fieldset">
            <label>Choose Dimension:</label>
            <div className="radio-group">
              {product.dimension.map((dimension, index) => (
                <label key={index}>
                  <input
                    type="radio"
                    name="dimension"
                    value={dimension}
                    onChange={handleChange}
                  />
                  {dimension}
                </label>
              ))}
            </div>
          </div>
        )}

        {product.id === 6 && (
          <>
            <label className="input">
              Choose color of the bowl:
              <input
                type="text"
                name="color"
                value={formData.color}
                onChange={handleChange}
                placeholder="Exp: White"
              />
            </label>
            <label className="input"> 
              Choose color of pattern (up to 4 colors, separated by commas):
              <input
                type="text"
                name="color2"
                value={formData.color2}
                onChange={handleChange}
                placeholder="Exp: Blue, Red, Green, Light Blue"
              />
            </label>
          </>
        )}

        {product.id === 7 && (
          <label className="input">
            Choose two colors (one for each bag):
            <input
              type="text"
              name="color"
              value={formData.color}
              onChange={handleChange}
              placeholder="Exp: Brown, Green"
            />
          </label>
        )}

        {(product.id === 8 || product.id === 9) && (
          <label className="input">
            Choose color:
            <input
              type="text"
              name="color"
              value={formData.color}
              onChange={handleChange}
              placeholder="Exp: Green"
            />
          </label>
        )}

        {(product.id === 10 || product.id === 11 || product.id === 12) && (
          <div className="fieldset">
            <label>Choose Dimension:</label>
            <div className="radio-group">
              {product.dimension.map((dimension, index) => (
                <label key={index}>
                  <input
                    type="radio"
                    name="dimension"
                    value={dimension}
                    onChange={handleChange}
                  />
                  {dimension}
                </label>
              ))}
            </div>
          </div>
        )}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Customize;
