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
    description: "Te ofrecemos servicios de albañilería y reparaciones estructurales para mantener la integridad de tu propiedad. Desde pequeñas reparaciones hasta proyectos más grandes, estamos acá para garantizar la solidez de tu edificación.",
    img: albanileriaImage,
  },
  {
    title: "Reparación y Mantenimiento de Equipos de Climatización",
    description: "Brindamos servicios especializados para mantener tus sistemas de climatización en óptimas condiciones. Desde la reparación de aires acondicionados hasta la optimización de sistemas, nos aseguramos de que tu ambiente sea siempre confortable.",
    img: climatizacionImage,
  },
  {
    title: "Servicios Eléctricos",
    description: "Nuestros electricistas altamente capacitados brindan servicios eléctricos seguros y eficientes. Desde la instalación de nuevos sistemas hasta la reparación de fallas, garantizamos un suministro eléctrico confiable.",
    img: electricidadImage,
  },
  {
    title: "Mantenimiento de Baños y Fontanería",
    description: "Nos especializamos en el mantenimiento de baños y sistemas de fontanería. Desde la reparación de fugas hasta la instalación de nuevos accesorios, nos encargamos de que tus instalaciones sanitarias funcionen perfectamente.",
    img: fontaneriaImage,
  },
  {
    title: "Revisión y Mantenimiento de Sistemas de Gas",
    description: "Realizamos revisiones y mantenimiento exhaustivos de sistemas de gas para garantizar la seguridad y eficiencia. Desde la detección de fugas hasta la calibración de equipos, cuidamos de tu sistema de gas.",
    img: gasImage,
  },
  {
    title: "Pintura y Acabados",
    description: "Nuestros expertos en pintura ofrecen servicios de alta calidad para darle vida a tus espacios. Ya sea una nueva capa de color o un acabado especial, nos encargamos de transformar tus ambientes.",
    img: pinturaYAcabadosImage,
  },
  {
    title: "Instalación y Reemplazo de Iluminación LED",
    description: "Actualizamos el sistema de iluminación de tu hogar o negocio a tecnología LED, que ofrece mayor eficiencia energética y durabilidad. Instalamos lámparas, focos y tubos LED en diferentes áreas para mejorar la iluminación y reducir costos de electricidad.",
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
