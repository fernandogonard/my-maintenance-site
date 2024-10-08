import React from 'react';
import './AboutUs.css';
import teamImage from '../assets/2d1n0wni.bmp'; // Importa la imagen

const AboutUs = () => {
  return (
    <section id="about-us">
      <div className="about-us-container">
        <div className="about-us-text">
          <h2>Quiénes Somos</h2>
          <p>
  En JP Mantenimiento, somos expertos en ofrecer servicios de <strong>mantenimiento integral</strong> para <strong>hogares y hoteles</strong> en <strong>Mar del Plata, Argentina</strong>. Nuestro equipo incluye profesionales capacitados en <strong>electricidad</strong>, <strong>plomería</strong>, <strong>albañilería</strong>, <strong>pintura</strong>, y más. 
  Nos aseguramos de mantener sus instalaciones en óptimas condiciones para garantizar la seguridad y el confort. Ya sea que necesite una <strong>reparación</strong> o una <strong>renovación</strong>, estamos aquí para ayudarle.
</p>
        </div>
        <div className="about-us-image">
          <img src={teamImage} alt="Equipo de JP Mantenimiento" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;