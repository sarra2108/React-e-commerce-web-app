import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import './ProductDisplay.css';
import { Link } from 'react-router-dom';
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const { t } = useTranslation();
    const { product } = props;
    const { addToCart } = useContext(ShopContext);

    return (
        <div className='productdisplay' role='region' aria-labelledby={`product_${product.id}_description`}>
            <div className="productdisplay-left">
                <div className="productdisplay-img">
                    <img 
                        className='productdisplay-main-img' 
                        src={product.image} 
                        alt={product.description || t('product_image')} 
                    />
                    <div className="productdisplay-customize-button">
                        {/* Customize button functionality */}
                    </div>
                </div>
            </div>
            <div className="productdisplay-right">
                <h1 id={`product_${product.id}_description`}>{t(`product_${product.id}_description`)}</h1>
                <div className="productdisplay-right-stars" role="img" aria-label={`${t('rating')}: 4 ${t('stars')}`}>
                    <img src={star_icon} alt={t('filled_star')} />
                    <img src={star_icon} alt={t('filled_star')} />
                    <img src={star_icon} alt={t('filled_star')} />
                    <img src={star_icon} alt={t('filled_star')} />
                    <img src={star_dull_icon} alt={t('empty_star')} />
                    <p>(3)</p>
                </div>
                <p>{t('overall_rating')}: 4.3</p>
                <p>{t('most_frequently_used_words')}: <span className="encircled">{t('beautiful')}</span>, <span className="encircled">{t('traditional')}</span>, <span className="encircled">{t('authentic')}</span></p>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">${product.old_price}</div>
                    <div className="productdisplay-right-price-new">${product.new_price}</div>
                </div>
                <div className="productdisplay-right-description">
                    <h2>{t('description')}</h2>
                    <p>{t('exquisite_description')}</p>
                    <h2>{t('artisan')}: {product.artisan}</h2>
                    <p>{t('artisan_description', { artisan: product.artisan })}</p>
                    <h2>{t('processes_behind_the_product')}</h2>
                    <ul>
                        <li>{t('clay_preparation')}</li>
                        <li>{t('shaping')}</li>
                        <li>{t('drying')}</li>
                        <li>{t('painting')}</li>
                        <li>{t('quality_check')}</li>
                    </ul>
                </div>
                <div>
                    <button onClick={() => { addToCart(product.id) }}>{t('add_to_cart')}</button> OR
                    <Link to='/contact'> <button>{t('contact_artisan')}</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDisplay;
