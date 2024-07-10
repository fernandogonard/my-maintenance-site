import React from 'react';
import PropTypes from 'prop-types'; // Importa PropTypes

import './Card.css';
import whatsappIcon from '../assets/whatsapp-icon.jpg';

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

// Define PropTypes para validar las props
Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
};

export default Card;
