import React, { useContext } from 'react';
import './ProductDisplay.css';
import { Link } from 'react-router-dom';
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);

    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={product.image} alt="" />
                    <div className="productdisplay-customize-button">
                  
                    </div>
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.description}</h1>
                <div className="productdisplay-right-stars">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(3)</p>
                </div>
                <p>Overall rating : 4.3</p>
                <p>Most frequently used words : <span className="encircled">beautiful</span>, <span className="encircled">traditional</span>, <span className="encircled">authentic</span></p>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">${product.old_price}</div>
                    <div className="productdisplay-right-price-new">${product.new_price}</div>
                </div>
                <div className="productdisplay-right-description">
                    <h2>Description</h2>
                   <p id='text'>This exquisite hand-painted ceramic vase is a masterpiece of Tunisian craftsmanship, perfect for holding flowers and adding elegance to any room.</p>
                    <h2>Artisan : {product.artisan}</h2>
                    <p>{product.artisan} is a renowned Tunisian artisan with over 20 years of experience, dedicated to preserving Tunisia's cultural heritage through beautiful, functional art.</p>
                    <h2>Processes Behind the Product</h2>
                 
                        <p>Clay Preparation: High-quality clay is cleaned and kneaded.</p>
                     <p>Shaping: Clay is shaped by hand or potter's wheel.</p> 
                        <p>Drying: The shaped clay dries slowly to prevent cracking.</p>
                       <p>Painting: Traditional Tunisian motifs are hand-painted.</p>
                        <p>Quality Check: Each vase is inspected for imperfections before being signed and sold.</p>
                        

              
                </div>
                <div>
                    <button onClick={() => { addToCart(product.id) }}>ADD TO CART</button> OR
                    <Link to='/contact'> <button>CONTACT ARTISAN</button></Link>
                </div>
            </div>
        </div>
    );
}

export default ProductDisplay;
