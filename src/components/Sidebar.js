import React from 'react';
import Accordion from './Accordion';
import FramePiece from './FramePiece'; // Update with actual images or dummy data for now
import HexTile from './HexTile';
import NumberToken from './NumberToken';
import oreHex from '../assets/ore-hex.png'; // Import the Ore image
import framePieceImage from '../assets/frame-piece-1.png'; // Import the frame piece image

const Sidebar = ({ onDragStart }) => {
  return (
    <div className="sidebar">
      <Accordion title="Frame Pieces">
        <div className="pieces" id="frame-pieces">
          {/* Replace with actual images or components */}
          <FramePiece image={framePieceImage} alt="Frame Piece 1" onDragStart={onDragStart} />
          <FramePiece image="path/to/frame-piece1.png" />
          <FramePiece image="path/to/frame-piece2.png" />
        </div>
      </Accordion>
      <Accordion title="Hexes">
        <div className="pieces" id="hexes">
          {/* Replace with actual images or components */}
          <HexTile image={oreHex} alt="Ore Hex" />
          <HexTile image="path/to/hex-tile1.png" />
          <HexTile image="path/to/hex-tile2.png" />
        </div>
      </Accordion>
      <Accordion title="Numbers">
        <div className="pieces" id="numbers">
          {/* Replace with actual images or components */}
          <NumberToken image="path/to/number-token1.png" />
          <NumberToken image="path/to/number-token2.png" />
        </div>
      </Accordion>
    </div>
  );
};

export default Sidebar;
