import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

import './Contact.css';

const Contact = () => {
  const phoneNumber = '+5492236685979';

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const message = event.target.elements.message.value;
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(`Hola, soy ${name}. ${message}`)}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <Box className="contact-section" id="contact">
      <Box className="contact-container">
        <Typography variant="h2" component="h2" className="contact-title">
          Contacto
        </Typography>
        <form onSubmit={handleSubmit} className="contact-form">
          <TextField
            label="Nombre"
            name="name"
            variant="outlined"
            fullWidth
            required
          />
          <TextField
            label="Mensaje"
            name="message"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
            required
          />
          <Button type="submit" variant="contained" color="primary" className="contact-button">
            Enviar por WhatsApp
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Contact;
