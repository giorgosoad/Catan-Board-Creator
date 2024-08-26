import React from 'react';
import './HexTile.css';

const HexTile = ({ image, alt }) => {
  return (
    <img
      src={image}
      alt={alt}
      className="hex-tile"
      draggable="true" // This enables the dragging functionality
    />
  );
};

export default HexTile;
