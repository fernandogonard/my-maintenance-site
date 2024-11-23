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
  En <strong>JP Mantenimiento</strong>, somos los referentes en <strong>mantenimiento integral</strong> para <strong>hogares y hoteles</strong> en <strong>Mar del Plata</strong>. Nuestro equipo local está formado por profesionales capacitados en <strong>electricidad</strong>, <strong>plomería</strong>, <strong>albañilería</strong>, <strong>pintura</strong>, y mucho más.  
  Ofrecemos <strong>servicios confiables y rápidos</strong>, asegurando que sus instalaciones estén siempre en las mejores condiciones. Desde una <strong>reparación urgente</strong> hasta <strong>renovaciones completas</strong>, en JP Mantenimiento estamos a su servicio, con la calidad y dedicación que nos caracteriza en la región.
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