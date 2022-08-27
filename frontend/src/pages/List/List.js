import { Axios } from 'axios';
import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Heading from '../../components/Heading';
import List_products from '../../components/List_products';
import './List.scss';

const List = () => {
  const [post, setPost] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(21);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = post.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    Axios.get('http://3.68.79.190:5000/produk')
      .then((result) => {
        const responseAPI = result.data;
        console.log(result.data);
        setPost(responseAPI.data);
      })
      .catch((err) => {
        console.log('error: ', err);
      });
  }, []);
  return (
    <div>
      <Header />
      <Heading judul="List Produk" url="list" />
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
      <Footer />
    </div>
  );
};

export default List;
