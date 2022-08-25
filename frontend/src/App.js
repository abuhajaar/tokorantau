import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Banner from './components/Banner';

import './App.scss';
import Category from './components/Category';
import List_products from './components/List_products';

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Banner />
      <Category />
      <Banner />
      <List_products />
    </div>
  );
};

export default App;
