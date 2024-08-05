import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardMedia, CardContent, Typography, IconButton, Tooltip } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './Card.css';

const CustomCard = ({ title, description, imgSrc }) => {
  const handleShare = () => {
    // Lógica para compartir (ejemplo simple con alert)
    alert('Compartido!');
  };

  return (
    <Card className="card">
      <CardMedia
        component="img"
        image={imgSrc}
        alt={title}
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
          <Tooltip title="Compartir">
            <IconButton onClick={handleShare} color="primary">
              <ShareIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Agregar a favoritos">
            <IconButton color="secondary">
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
