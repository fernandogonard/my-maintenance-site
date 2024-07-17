// src/components/WhatsAppButton.jsx
import React from 'react';
import './WhatsAppButton.css';
import whatsappIcon from '../assets/icons8-whatsapp-50.png';

const WhatsAppButton = () => {
  return (
    <a href="https://wa.me/5492236685979" className="whatsapp-fixed-button" target="_blank" rel="noopener noreferrer">
      <img src={whatsappIcon} alt="WhatsApp" />
    </a>
  );
};

export default WhatsAppButton;