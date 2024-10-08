import React from 'react';
import './WhatsAppButton.css';
import whatsappIcon from '../assets/icons8-whatsapp-50.png';

const WhatsAppButton = () => (
  <a 
    href="https://wa.me/5492236685979" 
    className="whatsapp-fixed-button" 
    target="_blank" 
    rel="noopener noreferrer"
    aria-label="Contactar por WhatsApp"
  >
    <img src={whatsappIcon} alt="Contactar por WhatsApp" />
  </a>
);

export default WhatsAppButton;
