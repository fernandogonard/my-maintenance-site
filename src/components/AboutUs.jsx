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
            En JP Mantenimiento, nos dedicamos a ofrecer servicios integrales de mantenimiento tanto para hogares como para hoteles. Nuestro equipo está compuesto por profesionales altamente capacitados en diversas áreas como electricidad, fontanería, pintura, albañilería y más. Nos enorgullece brindar soluciones eficientes y de alta calidad que aseguren el óptimo funcionamiento y la estética de sus instalaciones.
            <br/><br/>
            Con años de experiencia en el sector, hemos desarrollado un enfoque centrado en la satisfacción del cliente, garantizando que cada proyecto se realice con el máximo cuidado y atención al detalle. Entendemos la importancia de mantener un ambiente seguro y confortable, y trabajamos incansablemente para superar las expectativas de nuestros clientes. Ya sea que necesite una simple reparación o un proyecto de renovación completo, estamos aquí para ayudarle a alcanzar sus objetivos con profesionalismo y dedicación.
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
