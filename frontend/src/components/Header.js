import React, { useState } from 'react';
import './Header.scss';
import { BiSearch } from 'react-icons/bi';
import { BsCartCheck } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';
import { BiMenuAltRight } from 'react-icons/bi';
import { GrClose } from 'react-icons/gr';
import { useHistory } from 'react-router-dom';

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

  const history = useHistory();
  return (
    <header className="header">
      <section className={!showNav ? 'flex' : 'flex active'}>
        <button className="logo" onClick={() => history.push('/')}>
          <span>Toko</span>Rantau
        </button>
        <navbar>
          <ul className={click ? 'navbar active' : 'navbar'}>
            <li className="items" onClick={handleMobileClose}>
              <button onClick={() => history.push('/list')}>Produk</button>
            </li>
            <li className="items" onClick={handleMobileClose}>
              <button onClick={() => history.push('/tentang')}>
                Tentang Kami
              </button>
            </li>

            <li className="items" onClick={handleMobileClose}>
              <button onClick={() => history.push('/pesanan')}>Pesanan</button>
            </li>
            <li className="items" onClick={handleMobileClose}>
              <button onClick={() => history.push('/hubungi')}>Kontak</button>
            </li>
          </ul>
        </navbar>

        <div className="icons">
          <button onClick={() => history.push('/cari')} className="icon">
            <BiSearch />
          </button>
          <button onClick={() => history.push('/keranjang')} className="icon">
            <BsCartCheck />
          </button>
          <a onClick={handleProfile} className="icon">
            <FaUserCircle />
          </a>
          <a className="btn" onClick={handleClick}>
            {click ? <GrClose /> : <BiMenuAltRight />}
          </a>
        </div>

        <div className={profile ? 'profile active' : 'profile'}>
          <p className="name">Adam Bisyahri</p>
          <div className="flex">
            <button
              onClick={() => history.push('/akun')}
              className="yellow-btn"
            >
              Akun
            </button>
            <button onClick={() => history.push('/')} className="red-btn">
              Keluar
            </button>
          </div>
          <p className="account">
            <button onClick={() => history.push('/login')}>Masuk</button> atau{' '}
            <button onClick={() => history.push('/daftar')}>Daftar</button>
          </p>
        </div>
      </section>
    </header>
  );
};

export default Header;
