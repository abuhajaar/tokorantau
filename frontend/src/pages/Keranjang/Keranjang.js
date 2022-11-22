import React from 'react';
import Header from '../../components/Header';
import Heading from '../../components/Heading';
import Footer from '../../components/Footer';
import List_products from '../../components/List_products';
import './Keranjang.scss';
import data from '../data';

const Keranjang = () => {
  return (
    <div>
      <Header />
      <Heading judul="Keranjang Belanja" url="keranjang" />
      <div className="order">
        <h1 className="title-order">Belanjaan anda</h1>

        <div className="cart-total">
          <p>
            total harga: <span>€9</span>
          </p>

          <a href="checkout.html" class="btn">
            proses pembayaran
          </a>
        </div>
      </div>
      <div className="content-wrapper">
        {data.produk.map((data) => {
          return (
            <List_products
              key={data._id}
              title={data.title}
              category={data.category}
              price={data.price}
              author={data.author}
              _id={data._id}
            />
          );
        })}
      </div>
      <div class="more-btn">
        <form action="" method="post">
          <button type="submit" class="logout-btn" name="delete-all">
            Hapus Semua
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Keranjang;
