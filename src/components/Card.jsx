// Card.jsx

import React from 'react';
import './Card.css';
import whatsappIcon from './assets/whatsapp-icon.png'; // Asegúrate de tener la ruta correcta al icono de WhatsApp

const Card = ({ title, description, imgSrc }) => {
  return (
    <div className="card">
      <img src={imgSrc} alt={title} className="card__image" />
      <div className="card__content">
        <h2 className="card__title">{title}</h2>
        <p className="card__description">{description}</p>
        <a href="https://wa.me/5492236685979" className="whatsapp-button" target="_blank" rel="noopener noreferrer">
          <img src={whatsappIcon} alt="WhatsApp" />
        </a>
      </div>
    </div>
  );
};

export default Card;
