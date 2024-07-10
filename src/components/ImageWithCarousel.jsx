import React, { useState, useEffect } from 'react';
import './ImageWithCarousel.css';

const ImageWithCarousel = () => {
  const [current, setCurrent] = useState(0);

  const images = [
    "/src/assets/elijebien.jpg",
    "/src/assets/carousel-image1.jpg",
    "/src/assets/carousel-image2.jpg",
    "/src/assets/carousel-image3.jpg",
    "/src/assets/carousel-image4.jpg",
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
