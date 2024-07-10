import React, { useState } from 'react';
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
    description: "Ofrecemos servicios de albañilería y reparaciones estructurales para mantener la integridad de tu propiedad. Desde pequeñas reparaciones hasta proyectos más grandes, estamos aquí para garantizar la solidez de tu edificación.",
    img: albanileriaImage,
    
  },
  {
    title: "Reparación y Mantenimiento de Equipos de Climatización",
    description: "Brindamos servicios especializados para mantener tus sistemas de climatización en óptimas condiciones. Desde la reparación de aires acondicionados hasta la optimización de sistemas, aseguramos un ambiente confortable.",
    img: climatizacionImage,
  },
  {
    title: "Servicios Eléctricos",
    description: "Nuestros electricistas altamente capacitados brindan servicios eléctricos seguros y eficientes. Desde la instalación de nuevos sistemas hasta la reparación de fallas, garantizamos un suministro eléctrico confiable.",
    img: electricidadImage,
  },
  {
    title: "Mantenimiento de Baños y Fontanería",
    description: "Nos especializamos en el mantenimiento de baños y sistemas de fontanería. Desde la reparación de fugas hasta la instalación de nuevos accesorios, aseguramos un funcionamiento eficiente de tus instalaciones sanitarias.",
    img: fontaneriaImage,
  },
  {
    title: "Revisión y Mantenimiento de Sistemas de Gas",
    description: "Realizamos revisiones y mantenimiento exhaustivos de sistemas de gas para garantizar la seguridad y eficiencia. Desde la detección de fugas hasta la calibración de equipos, cuidamos de tu sistema de gas.",
    img: gasImage,
  },
  {
    title: "Pintura y Acabados",
    description: "Nuestros expertos en pintura proporcionan servicios de alta calidad para dar vida a tus espacios. Ya sea una nueva capa de color o un acabado especial, nos encargamos de transformar tus ambientes.",
    img: pinturaYAcabadosImage,
  },
  {
    title: "Instalación y Reemplazo de Iluminación LED",
    description: "Actualizamos el sistema de iluminación de su hogar o hotel a tecnología LED, que ofrece mayor eficiencia energética y durabilidad. Instalamos lámparas, focos y tubos LED en diferentes áreas para mejorar la iluminación y reducir costos de electricidad.",
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

  return (
    <div className="service-card-container">
      <button className="carousel__button carousel__button--prev" onClick={prevService}>❮</button>
      <div className="service-card">
        <img src={img} alt={title} className="service-card-img" />
        <div className="service-card-content">
          <h1>Nuestros Servicios</h1>
          <h2>{title}</h2>
          <p>{description}</p>
          <a>Solicitar presupuesto por WhatsApp</a>
          <a className="whatsapp-button" href="https://wa.me/5492236685979" target="_blank" rel="noopener noreferrer">
          <img src="src/assets/whatsapp-icon-png.jpg" alt="WhatsApp" />
        </a>
        </div>
      </div>
      <button className="carousel__button carousel__button--next" onClick={nextService}>❯</button>
    </div>
  );
};

export default ServiceCard;
