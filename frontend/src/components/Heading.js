import React from 'react';
import './Heading.scss';
const Heading = () => {
  return (
    <div className="heading">
      <h3>Tentang Kami</h3>
      <p>
        <a href="#">home</a>
        <span> / about</span>
      </p>
    </div>
  );
};

export default Heading;
