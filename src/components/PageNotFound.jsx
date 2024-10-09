// src/components/PageNotFound.jsx
import React from 'react';
import NotFoundImage from '../assets/404.png'; // Ajusta la ruta según tu estructura de carpetas
import '../styles/PageNotFound.css'; // Importa el CSS

const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <div className="background-effect"></div> {/* Fondo animado */}
      <h1>404 - Página No Encontrada</h1>
      <p>Lo sentimos, la página que buscas no existe.</p>
      <img 
        src={NotFoundImage} 
        alt="Página No Encontrada" 
        style={{ borderRadius: '10px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)' }} // Opciones de estilo adicionales
      />
    </div>
  );
};

export default PageNotFound;
