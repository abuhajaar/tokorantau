import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Heading from '../../components/Heading';
import List_products from '../../components/List_products';

const List = () => {
  return (
    <div>
      <Header />
      <Heading judul="List Produk" url="list" />
      <List_products />
      <Footer />
    </div>
  );
};

export default List;
