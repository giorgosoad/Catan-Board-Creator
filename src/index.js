import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import DnDContext from './DnDContext';

ReactDOM.render(
  <DnDContext>
    <App />
  </DnDContext>,
  document.getElementById('root')
);
