import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Board from './components/Board';
import Header from './components/Header';
import framePieceImage from './assets/frame-piece-1.png';


const App = () => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData('text/plain', 'framePiece');
  };

  return (
    <div className="app">
      <header className="header">
        Catan Map Creator
      </header>
      <div className="content">
        <Sidebar onDragStart={handleDragStart} />
        <Board />
      </div>
    </div>
  );
};

export default App;
