import React from 'react';
import './About.scss';
import about from '../assets/about.jpg';
import { useHistory } from 'react-router-dom';

const About = () => {
  const history = useHistory();
  return (
    <div className="about">
      <div className="row">
        <div className="image">
          <img src={about}></img>
        </div>

        <div className="content">
          <h3>kenapa memilih kami?</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
            ipsa ea ipsam omnis, nisi facilis velit eum facere, nostrum iste nam
            porro harum sed earum eaque culpa totam, eligendi necessitatibus?
          </p>
          <button className="btn" onClick={() => history.push('/')}>
            Lihat Semua
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
