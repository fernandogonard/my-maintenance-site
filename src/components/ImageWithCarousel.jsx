import React, { useState, useEffect } from 'react';
import './ImageWithCarousel.css';
import elijebienImage from '../assets/elijebien.jpg';
import carouselImage1 from '../assets/carousel-image1.jpg';
import carouselImage2 from '../assets/carousel-image2.jpg';
import carouselImage3 from '../assets/carousel-image3.jpg';
import carouselImage4 from '../assets/carousel-image4.jpg';

const ImageWithCarousel = () => {
  const [current, setCurrent] = useState(0);


const images = [
  elijebienImage,
  carouselImage1,
  carouselImage2,
  carouselImage3,
  carouselImage4,
];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000); // Cambia cada 4 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="image-with-carousel">
      <div className="carousel__slides">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel__slide ${index === current ? 'active' : ''}`}
          >
            <img src={image} alt={`Carousel Image ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageWithCarousel;