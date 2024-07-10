import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import ServiceCard from './components/ServiceCard';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ImageWithCarousel from './components/ImageWithCarousel';
import './index.css';


const App = () => {
  return (
    <div>
      <section id="services">
        <Navbar />
        <Header />    
        <ServiceCard/>
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
    </div>
  );
};

export default App;
