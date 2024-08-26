import React, { useState } from 'react';
import './Board.css';

const Board = () => {
  const [pieces, setPieces] = useState([]);
  const [selectedPiece, setSelectedPiece] = useState(null);

  const handleDrop = (e) => {
    e.preventDefault();
    const src = e.dataTransfer.getData('text'); // Get the image source from the dragged item
    const newPiece = {
      id: pieces.length + 1,
      x: e.clientX,
      y: e.clientY,
      src: src, // Save the image source
    };
    setPieces([...pieces, newPiece]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleClickPiece = (id) => {
    setSelectedPiece(id);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Delete' && selectedPiece !== null) {
      setPieces(pieces.filter(piece => piece.id !== selectedPiece));
      setSelectedPiece(null);
    }
  };

  return (
    <div
      className="board"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onKeyDown={handleKeyDown}
      tabIndex={0} // This makes the div focusable to capture key events
    >
      {pieces.map((piece) => (
        <img
          key={piece.id}
          src="./assets/frame-piece-1.png" // Replace with your frame piece image path
          alt="Frame Piece"
          className={`piece ${piece.id === selectedPiece ? 'selected' : ''}`}
          style={{ left: piece.x, top: piece.y, position: 'absolute' }}
          onClick={() => handleClickPiece(piece.id)}
        />
      ))}
    </div>
  );
};

export default Board;

