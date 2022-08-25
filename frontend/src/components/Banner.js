import React from 'react';
import './Banner.scss';

const Banner = (props) => {
  const { judul } = props;
  return (
    <div className="container">
      <h1>{judul}</h1>
    </div>
  );
};

export default Banner;
