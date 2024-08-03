import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../assets/logo.png'; // Asegúrate de que la ruta sea correcta

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="#home" className="logo" onClick={() => handleNavClick('home')}>
        <img src={logo} alt="Logo JP Mantenimiento" />
      </a>
      <h1>JP Mantenimiento y Reciclado de propiedades</h1>
      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <a href="#services" onClick={() => handleNavClick('services')}>Servicios</a>
        <a href="#about-us" onClick={() => handleNavClick('about-us')}>Sobre Nosotros</a>
        <a href="#contact" onClick={() => handleNavClick('contact')}>Contacto</a>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
