import React from 'react';
import './Contact.css';

const Contact = () => {
  const phoneNumber = '+5492236685979'; // Número de teléfono de WhatsApp

  const handleSubmit = (event) => {
    event.preventDefault();

    // Obtener los valores de nombre y mensaje del formulario
    const name = event.target.elements.name.value;
    const message = event.target.elements.message.value;

    // Crear el enlace para enviar el mensaje por WhatsApp
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(`Hola, soy ${name}. ${message}`)}`;

    // Redirigir al usuario a WhatsApp
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="contact-section" id="contact">
      <div className="contact-container">
        <h2>Contacto</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nombre</label>
          <input type="text" id="name" name="name" required />
        
          <label htmlFor="message">Mensaje</label>
          <textarea id="message" name="message" required></textarea>
          
          <button type="submit">Enviar por WhatsApp</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;