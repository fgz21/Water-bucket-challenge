import React from 'react';
import './style/jar.css';

const Jar = ({ measurement }) => {
  const height = `${measurement}%`; // calcula la altura en función de la cantidad medida

  return (
    <div className="container">
      <div className="jar">
        <div className="jar-body">
          <div className="jar-fluid" style={{ height }}></div>
        </div>
        <div className="jar-handle"></div>
      </div>
    </div>
  );
};

export default Jar;