import React, { useState } from 'react';
import './Header.scss';
import { BiSearch } from 'react-icons/bi';
import { BsCartCheck } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';
import { BiMenuAltRight } from 'react-icons/bi';
import { GrClose } from 'react-icons/gr';

const Header = () => {
  const [click, setClick] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [profile, setProfile] = useState(false);

  const handleProfile = () => {
    setProfile(!profile);
    setClick(false);
  };

  const handleClick = () => {
    setClick(!click);
    setProfile(false);
  };

  const handleMobileClose = () => {
    setClick(false);
    setProfile(false);
  };
  return (
    <header className="header">
      <section className={!showNav ? 'flex' : 'flex active'}>
        <a href="#" className="logo">
          <span>Toko</span>Rantau
        </a>
        <navbar>
          <ul className={click ? 'navbar active' : 'navbar'}>
            <li className="items" onClick={handleMobileClose}>
              <a href="#">Home</a>
            </li>
            <li className="items" onClick={handleMobileClose}>
              <a href="#">About us</a>
            </li>
            <li className="items" onClick={handleMobileClose}>
              <a href="#">Menu</a>
            </li>
            <li className="items" onClick={handleMobileClose}>
              <a href="#">Order</a>
            </li>
            <li className="items" onClick={handleMobileClose}>
              <a href="#">Contact</a>
            </li>
          </ul>
        </navbar>

        <div className="icons">
          <a>
            <BiSearch />
          </a>
          <a>
            <BsCartCheck />
          </a>
          <a onClick={handleProfile}>
            <FaUserCircle />
          </a>
          <a className="btn" onClick={handleClick}>
            {click ? <GrClose /> : <BiMenuAltRight />}
          </a>
        </div>

        <div className={profile ? 'profile active' : 'profile'}>
          <p className="name">Adam Bisyahri</p>
          <div className="flex">
            <a className="yellow-btn">Akun</a>
            <a className="red-btn">Keluar</a>
          </div>
          <p className="account">
            <a href="#">Masuk</a> atau <a href="#">Daftar</a>
          </p>
        </div>
      </section>
    </header>
  );
};

export default Header;
