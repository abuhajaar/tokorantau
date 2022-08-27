import React from 'react';
import './Footer.scss';
import { FaTiktok } from 'react-icons/fa';
import { ImInstagram } from 'react-icons/im';
import { BsYoutube } from 'react-icons/bs';

function Footer() {
  return (
    <div className="footer">
      <h2>TokoRantau</h2>
      <div className="flex-icons">
        <a href="#">
          <FaTiktok />
        </a>
        <a href="#">
          <ImInstagram />
        </a>
        <a href="#">
          <BsYoutube />
        </a>
      </div>
      <div className="credit">Copyright &copy; 2022 - All rights reserved.</div>
    </div>
  );
}

export default Footer;
