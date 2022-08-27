import React from 'react';
import './Heading.scss';
const Heading = (props) => {
  const { judul, url } = props;
  return (
    <div className="heading">
      <h3>{judul}</h3>
      <p>
        <a href="#">home</a>
        <span> /{url}</span>
      </p>
    </div>
  );
};

export default Heading;
