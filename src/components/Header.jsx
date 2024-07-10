import React from 'react';
import './Header.css';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="Logo JP Mantenimiento" />
      </div>
      <h1>JP Mantenimiento y reciclado de propiedades</h1>
    </header>
  );
};

export default Header;
