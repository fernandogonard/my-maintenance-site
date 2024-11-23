import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardMedia, CardContent, Typography, IconButton, Tooltip } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './Card.css';

const CustomCard = ({ title, description, imgSrc }) => {
  const handleShare = () => {
    alert(`¡Has compartido "${title}" con éxito!`);
  };

  return (
    <Card className="card" role="article" aria-label={`Card para ${title}`}>
      <CardMedia
        component="img"
        image={imgSrc}
        alt={`Imagen representativa de ${title}`}
        className="card__image"
      />
      <CardContent className="card__content">
        <Typography variant="h5" component="h2" className="card__title">
          {title}
        </Typography>
        <Typography variant="body2" component="p" className="card__description">
          {description}
        </Typography>
        <div className="card__actions">
          <Tooltip title="Compartir este contenido">
            <IconButton
              onClick={handleShare}
              color="primary"
              aria-label="Compartir"
            >
              <ShareIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Agregar a favoritos">
            <IconButton
              color="secondary"
              aria-label="Agregar a favoritos"
            >
              <FavoriteIcon />
            </IconButton>
          </Tooltip>
        </div>
      </CardContent>
    </Card>
  );
};

CustomCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
};

export default CustomCard;
