import React, { useContext, useRef, useState } from 'react';
import './Navbar.css';

import cart_icon from '../Assets/cart_icon.png';
import nav_dropdown from '../Assets/nav_dropdown.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
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
        <li onClick={() => { setMenu("shop") }}><Link to='/'>Home</Link>{menu === "shop" ? <hr /> : null}</li>
        <li onClick={() => { setMenu("products") }}><Link to='/products'>Products</Link>{menu === "products" ? <hr /> : null}</li>
        <li onClick={() => { setMenu("contact_us") }}><Link to='/contact_us'>Contact Us</Link>{menu === "contact_us" ? <hr /> : null}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
