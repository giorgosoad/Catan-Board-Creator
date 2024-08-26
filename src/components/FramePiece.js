import React from 'react';
import './FramePiece.css';
import framePieceImage from '../assets/frame-piece-1.png'; // Ensure correct path

const FramePiece = ({ image, alt, onDragStart }) => {
    const handleDragStart = (e) => {
        e.dataTransfer.setData('text/plain', framePieceImage); // Set image source in dataTransfer
      };
      
  return (
    <img
      src={image}
      alt={alt}
      className="frame-piece"
      draggable="true"
      onDragStart={onDragStart} // Pass the drag start event handler
    />
  );
};

export default FramePiece;


