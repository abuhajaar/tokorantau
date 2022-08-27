import React from 'react';
import About from '../../components/About';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Heading from '../../components/Heading';
import Mention from '../../components/Mention';
import Steps from '../../components/Steps';

const Tentang = () => {
  return (
    <div>
      <Header />
      <Heading judul="Tentang Kami" url="tentang" />
      <About />
      <Banner judul="Langkah-Langkah" />
      <Steps />
      <Banner judul="Jajaran Direksi" />
      <Mention />
      <Footer />
    </div>
  );
};

export default Tentang;
