import React from 'react';
import './Category.scss';
import { MdOutlineFastfood } from 'react-icons/md';
import { GiClothes } from 'react-icons/gi';
import { MdLuggage } from 'react-icons/md';
import { MdImportantDevices } from 'react-icons/md';

const Category = () => {
  return (
    <div className="box-grid">
      <a href="#" className="container">
        <MdOutlineFastfood className="icon" />
        <h5>Makanan Minuman</h5>
      </a>
      <a href="#" className="container">
        <GiClothes className="icon" />
        <h5>Pakaian</h5>
      </a>
      <a href="#" className="container">
        <MdLuggage className="icon" />
        <h5>Jasa Titip</h5>
      </a>
      <a href="#" className="container">
        <MdImportantDevices className="icon" />
        <h5>Elektronik</h5>
      </a>
    </div>
  );
};

export default Category;
