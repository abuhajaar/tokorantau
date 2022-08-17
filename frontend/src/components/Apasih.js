import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import List_products from './List_products';

const Apasih = () => {
  const [dataProduk, setDataProduk] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:5000/produk')
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
      {dataProduk.map((data) => {
        return <List_products key={data.id} />;
      })}
    </div>
  );
};

export default Apasih;
