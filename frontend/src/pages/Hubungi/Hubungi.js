import React from 'react';
import Header from '../../components/Header';
import Heading from '../../components/Heading';
import Contact from '../../components/Contact';
import Mention from '../../components/Mention';
import Footer from '../../components/Footer';

const Hubungi = () => {
  return (
    <div>
      <Header />
      <Heading judul="Hubungi Kami" url="hubungi" />
      <Contact />
      <Mention />
      <Footer />
    </div>
  );
};

export default Hubungi;
