import React, { useContext } from 'react';
import './DescriptionBox.css'
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from '../../Context/ShopContext';

const DescriptionBox = (props) => {
  const {product} = props;
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Reviews </div>
      </div>
      
      <div className="descriptionbox-description">
        <h3>Reviews on {product.description}</h3>
        <div className="review">
          <p>Review 1 :</p>
        <div className="productdisplay-right-stars">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                
                </div>
          <p >"The craftsmanship is outstanding, and it exudes a beautiful, traditional charm."</p>
          <p><strong>Rating:</strong> 5/5</p>
        </div>
        <div className="review">
        <p>Review 2 :</p>
        <div className="productdisplay-right-stars">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                
                </div>
          <p>"Its beautiful design and authentic feel make it a cherished item in my collection."</p>
          <p><strong>Rating:</strong> 4/5</p>
        </div>
        <div className="review">
        <p>Review 3 :</p>
        <div className="productdisplay-right-stars">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                
                </div>
          <p>"An authentic piece that seamlessly blends traditional and modern aesthetics."</p>
          <p><strong>Rating:</strong> 4/5</p>
        </div>
      </div>
    </div>
  )
}

export default DescriptionBox
