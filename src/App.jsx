// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import ServiceCard from './components/ServiceCard';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ImageWithCarousel from './components/ImageWithCarousel';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';
import WhatsAppButton from './components/WhatsAppButton'; // Importa el botón de WhatsApp
import './index.css';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Define otras rutas aquí */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <section id="services">
          <ServiceCard />
        </section>
        <section id="about-us">
          <AboutUs />
        </section>
        <section id="image-carousel">
          <ImageWithCarousel />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Footer />
        <WhatsAppButton /> {/* Añade el botón de WhatsApp */}
      </div>
    </Router>
  );
};

export default App;
