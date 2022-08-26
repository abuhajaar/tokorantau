import React from 'react';
import './Mention.scss';
import { GoMailRead } from 'react-icons/go';
import { BiTimeFive } from 'react-icons/bi';
import { BiPhoneCall } from 'react-icons/bi';
import { GrMapLocation } from 'react-icons/gr';

const Mention = () => {
  return (
    <div className="box-card">
      <div className="container">
        <GoMailRead className="icon" />
        <h5>Email</h5>
        <a href="#">adambis28@gmail.com</a>
      </div>
      <div className="container">
        <BiTimeFive className="icon" />
        <h5>Jam Operasional</h5>
        <a href="#">07:00am - 8:00pm</a>
      </div>
      <div className="container">
        <BiPhoneCall className="icon" />
        <h5>Nomor Telefon</h5>
        <a href="#">015204040529</a>
      </div>
      <div className="container">
        <GrMapLocation className="icon" />
        <h5>Alamat</h5>
        <a href="#">Trier, Germany</a>
      </div>
    </div>
  );
};

export default Mention;
