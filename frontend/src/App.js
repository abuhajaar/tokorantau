import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Banner from './components/Banner';
import Axios from 'axios';
import './App.scss';
import Category from './components/Category';
import List_products from './components/List_products';
import Mention from './components/Mention';
import Heading from './components/Heading';
import About from './components/About';
import Steps from './components/Steps';
import Review from './components/Review';

const App = () => {
  const [dataProduk, setDataProduk] = useState([]);

  useEffect(() => {
    Axios.get('http://35.158.139.90:5000/produk')
      .then((result) => {
        const responseAPI = result.data;
        console.log(result.data);
        setDataProduk(responseAPI.data);
      })
      .catch((err) => {
        console.log('error: ', err);
      });
  }, []);
  return (
    <div>
      <Header />
      <Hero />
      <Banner judul="Kategori Produk" />
      <Category />
      <Banner judul="Produk Terbaru" />

      <div className="content-wrapper">
        {dataProduk.map((data) => {
          return (
            <List_products
              key={data.id}
              title={data.title}
              category={data.category}
              price={data.price}
              author={data.author}
            />
          );
        })}
      </div>
      <Mention />
      <Heading />
      <About />
      <Steps />
      <Review />
    </div>
  );
};

export default App;
