// Button.js
import React from 'react';

const Button = ({ width = '100px', height = '40px', children, onClick, fontSize , backgroundColor = 'rgb(38 83 227)', borderRadius = '5px'}) => {
  return (
    <button
      onClick={onClick}
      style={{
        width: width,
        height: height,
        backgroundColor: backgroundColor, // indigo-600
        color: 'white',
        border: 'none',
        fontWeight: 'bold',
        cursor: 'pointer',
        borderRadius: borderRadius,
        fontSize: fontSize
      }}
    >
      {children}
    </button>
  );
};

export default Button;
