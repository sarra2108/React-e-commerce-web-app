import React, { useContext, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import cart_icon from '../Assets/cart_icon.png';
import nav_dropdown from '../Assets/nav_dropdown.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();
  const { t, i18n } = useTranslation();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return ( 
    <div className='navbar'>
      <div className="nav-logo">
        <Link to='/' onClick={() => { setMenu("shop") }} >
          <p>Blessings of Carthage</p>
        </Link>
      </div> 
      <img onClick={dropdown_toggle} className='nav-dropdown' src={nav_dropdown} alt="" />
      <ul ref={menuRef} className="nav-menu">
        <li onClick={() => { setMenu("shop") }}><Link to='/blessingsofcarthage'>{t('home')}</Link>{menu === "shop" ? <hr /> : null}</li>
        <li onClick={() => { setMenu("products") }}><Link to='/products'>{t('products')}</Link>{menu === "products" ? <hr /> : null}</li>
        <li onClick={() => { setMenu("contact_us") }}><Link to='/contact_us'>{t('contact_us')}</Link>{menu === "contact_us" ? <hr /> : null}</li>
        <li onClick={() => { setMenu("FAQ") }}><Link to='/FAQ'>FAQ</Link>{menu === "FAQ" ? <hr /> : null}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>{t('login')}</button></Link>
        <Link to='/signup'><button>{t('signup')}</button></Link>
        <div className="language-switcher">
          <FontAwesomeIcon icon={faEarthAmericas} className="large-icon" />
          <div className="language-dropdown">
            <button onClick={() => changeLanguage('en')}>EN</button>
            <button onClick={() => changeLanguage('fr')}>FR</button>
          </div>
        </div>
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
