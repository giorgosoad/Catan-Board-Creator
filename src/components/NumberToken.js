import React from 'react';

const NumberToken = ({ image }) => {
  return (
    <img src={image} alt="Number Token" draggable="true" className="number-token" />
  );
};

export default NumberToken;
