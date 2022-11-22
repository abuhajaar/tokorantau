import React from 'react';
import { useHistory } from 'react-router-dom';
import './Heading.scss';
const Heading = (props) => {
  const { judul, url } = props;
  const history = useHistory();
  return (
    <div className="heading">
      <h3>{judul}</h3>
      <p>
        <a onClick={() => history.push('/')}>home</a>
        <span> /{url}</span>
      </p>
    </div>
  );
};

export default Heading;
