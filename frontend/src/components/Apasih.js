import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import List_products from './List_products';

const Apasih = () => {
  const [dataProduk, setDataProduk] = useState([]);

  useEffect(() => {
    Axios.get('http://35.158.139.90:5000/produk')
      .then((result) => {
        const responseAPI = result.data;
        console.log(result.produk);
        setDataProduk(responseAPI.produk);
      })
      .catch((err) => {
        console.log('error: ', err);
      });
  }, []);

  return (
    <div>
      {dataProduk.map((produk) => {
        return <List_products key={produk.id} />;
      })}
    </div>
  );
};

export default Apasih;
