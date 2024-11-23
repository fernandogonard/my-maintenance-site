import React, { useState } from 'react';
import { IconButton, Tooltip, Typography, Box, Button } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

import './ServiceCard.css';

import albanileriaImage from '../assets/albanileria.jpg';
import climatizacionImage from '../assets/climatizacion.jpg';
import electricidadImage from '../assets/electricidad.jpg';
import fontaneriaImage from '../assets/fontaneria.jpg';
import gasImage from '../assets/gas.jpg';
import pinturaYAcabadosImage from '../assets/pinturaYAcabados.jpg';
import reemplazoDeTubosLEDImage from '../assets/ReemplazoDeTubosLED.jpg';

const services = [
  {
    title: "Albañilería y Reparaciones Estructurales",
    description:
      "Realizamos trabajos de albañilería y mantenimiento estructural en Mar del Plata. Ya sea que necesites reparar una pared, revocar superficies o encarar un proyecto más grande, nuestro equipo se encarga de todo con materiales de primera calidad. Tu casa o negocio estará en buenas manos, ¡garantizado!",
    img: albanileriaImage,
  },
  {
    title: "Reparación y Mantenimiento de Equipos de Climatización",
    description:
      "¿Tu aire acondicionado no enfría como antes? Somos especialistas en sistemas de climatización. Desde el mantenimiento preventivo hasta la reparación de fallas, aseguramos que estés cómodo todo el año. Ideal para enfrentar los inviernos marplatenses y los calores del verano.",
    img: climatizacionImage,
  },
  {
    title: "Servicios Eléctricos",
    description:
      "Solucionamos problemas eléctricos de forma rápida y segura. Desde la instalación de sistemas nuevos hasta reparaciones urgentes, nuestro equipo cuenta con experiencia en hogares y comercios de Mar del Plata. No corras riesgos, llamanos y dejá que un profesional se encargue.",
    img: electricidadImage,
  },
  {
    title: "Mantenimiento de Baños y Fontanería",
    description:
      "Nos encargamos de mantener tus baños y sistemas de cañerías en perfecto estado. Reparamos pérdidas de agua, cambiamos griferías o realizamos instalaciones completas. Si estás en Mar del Plata, podés confiar en nosotros para que tus instalaciones estén como nuevas.",
    img: fontaneriaImage,
  },
  {
    title: "Revisión y Mantenimiento de Sistemas de Gas",
    description:
      "Tu seguridad es nuestra prioridad. Detectamos y solucionamos fugas, realizamos inspecciones y calibramos equipos de gas. Conocemos las normativas locales y trabajamos para que tu hogar o negocio en Mar del Plata sea un lugar seguro.",
    img: gasImage,
  },
  {
    title: "Pintura y Acabados",
    description:
      "Transformamos tus espacios con pintura de calidad. Ya sea una renovación completa o detalles en paredes y techos, nuestros pintores son expertos en dar vida a tus ideas. Un cambio de color puede hacer maravillas por tu casa o negocio.",
    img: pinturaYAcabadosImage,
  },
  {
    title: "Instalación y Reemplazo de Iluminación LED",
    description:
      "Actualizá tu iluminación con tecnología LED para ahorrar energía y mejorar la estética. Instalamos lámparas, tubos y sistemas personalizados en viviendas y locales comerciales de Mar del Plata. Además de ser funcional, ¡tu espacio lucirá increíble!",
    img: reemplazoDeTubosLEDImage,
  },
];


const ServiceCard = () => {
  const [current, setCurrent] = useState(0);

  const nextService = () => {
    setCurrent((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  const prevService = () => {
    setCurrent((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const { title, description, img } = services[current];

  const whatsappUrl = "https://wa.me/5492236685979?text=Hola%20me%20interesa%20el%20presupuesto%20para%20los%20servicios";

  return (
    <Box className="service-card-container">
      <IconButton onClick={prevService} className="carousel__button carousel__button--prev">
        <ArrowBack />
      </IconButton>
      <Box className="service-card">
        <img src={img} alt={title} className="service-card-img" loading="lazy" />
        <Box className="service-card-content">
          <Typography variant="h4" component="h1" className="service-card-title">
            Nuestros Servicios
          </Typography>
          <Typography variant="h6" component="h2">
            {title}
          </Typography>
          <Typography variant="body1">
            {description}
          </Typography>
          <Box className="service-card-actions">
            <Tooltip title="Solicitar presupuesto por WhatsApp">
              <Button
                variant="contained"
                color="primary"
                className="whatsapp-button"
                onClick={() => window.open(whatsappUrl, '_blank')}
              >
                Solicitar Presupuesto
              </Button>
            </Tooltip>
          </Box>
        </Box>
      </Box>
      <IconButton onClick={nextService} className="carousel__button carousel__button--next">
        <ArrowForward />
      </IconButton>
    </Box>
  );
};

export default ServiceCard;
