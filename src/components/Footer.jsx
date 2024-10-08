import React from 'react';
import { Box, Typography, Link, IconButton, Container } from '@mui/material';
import { Instagram, Facebook } from '@mui/icons-material';

const Footer = () => (
  <Box component="footer" sx={{ backgroundColor: '#212121', color: 'white', py: 4, borderTop: '1px solid rgba(255, 255, 255, 0.2)' }}>
    <Container maxWidth="lg">
      <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
        <Box>
          <Typography variant="h6" color="primary" gutterBottom>Contacto</Typography>
          <Typography variant="body1">
            Email: <Link href="mailto:jesuspaez232@gmail.com" color="inherit" underline="hover">jesuspaez232@gmail.com</Link>
          </Typography>
          <Typography variant="body1">
            Teléfono: <Link href="tel:+542236685979" color="inherit" underline="hover">+54 9 2236685979</Link>
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" color="primary" gutterBottom>Redes Sociales</Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <IconButton href="https://www.instagram.com/jesuspaez232/?hl=es" target="_blank" rel="noopener noreferrer" color="inherit">
              <Instagram fontSize="large" sx={{ '&:hover': { color: '#E4405F', transition: 'color 0.3s ease' } }} />
            </IconButton>
            <IconButton href="https://www.facebook.com/Jp.matenimiento" target="_blank" rel="noopener noreferrer" color="inherit">
              <Facebook fontSize="large" sx={{ '&:hover': { color: '#1877F2', transition: 'color 0.3s ease' } }} />
            </IconButton>
          </Box>
        </Box>
      </Box>
      <Typography variant="body2" textAlign="center" mt={4}>&copy; 2024 JP Mantenimiento y reciclado de propiedades. </Typography>
    </Container>
  </Box>
);

export default Footer;
