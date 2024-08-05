import React from 'react';
import './VideoWithLoop.css'; // Puedes reutilizar el archivo CSS existente

const VideoWithLoop = () => {
  return (
    <div className="image-with-carousel">
      <div className="video-container">
        <video autoPlay loop muted>
        <source src="src/assets/promo.mp4" type="video/mp4" />

          Tu navegador no admite el elemento de video.
        </video>
      </div>
    </div>
  );
};

export default VideoWithLoop;
