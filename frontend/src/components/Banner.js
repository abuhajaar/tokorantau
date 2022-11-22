import React from 'react';
import './Banner.scss';

const Banner = (props) => {
  const { judul, text } = props;
  return (
    <div className="container">
      <h1>{judul}</h1>
      <h1>{text}</h1>
    </div>
  );
};

export default Banner;
