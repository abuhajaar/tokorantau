import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Axios from 'axios';
import './App.scss';
import Category from '../components/Category';
import List_products from '../components/List_products';
import Mention from '../components/Mention';
import Heading from '../components/Heading';
import About from '../components/About';
import Steps from '../components/Steps';
import Review from '../components/Review';
import Footer from '../components/Footer';
import View from '../components/View';

const App = () => {
  const [post, setPost] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(6);

  useEffect(() => {
    Axios.get('http://35.158.139.90:5000/produk')
      .then((result) => {
        const responseAPI = result.data;
        console.log(result.data);
        setPost(responseAPI.data);
      })
      .catch((err) => {
        console.log('error: ', err);
      });
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = post.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div>
      <Header />
      <Hero />
      <Banner judul="Kategori Produk" />
      <Category />
      <Banner judul="Produk Terbaru" />

      <div className="content-wrapper">
        {currentPost.map((data) => {
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
      <View />
      <Banner judul="Ulasan Pelanggan" />
      <Review />
      <Footer />
    </div>
  );
};

export default App;
