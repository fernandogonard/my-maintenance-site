import React from 'react';
import './Footer.css';
import instagramIcon from '../assets/icons8-instagram-50.png';
import facebookIcon from '../assets/icons8-facebook-nuevo-50.png';
import whatsappIcon from '../assets/icons8-whatsapp-50.png';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__left">
          <h3>Contacto</h3>
          <p>Email:   jesuspaez232@gmail.com</p>
          <p>Teléfono: +54 9 2236685979</p>
    
        </div>
        <div className="footer__right">
  <h3>Redes Sociales</h3>
  <div className="social">
    <a href="https://www.instagram.com/jesuspaez232/?hl=es" target="_blank" rel="noopener noreferrer">
      <img src={instagramIcon} alt="Instagram" />
    </a>
    <a href="https://www.facebook.com/Jp.matenimiento" target="_blank" rel="noopener noreferrer">
      <img src={facebookIcon} alt="Facebook" />
    </a>
    <a href="https://wa.me/5492236685979" target="_blank" rel="noopener noreferrer">
    <img src={whatsappIcon} alt="WhatsApp" />
    </a>
  </div>
</div>
      </div>
      <p className="footer__copyright">&copy; 2024 JP Mantenimiento y reciclado de propiedades. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
