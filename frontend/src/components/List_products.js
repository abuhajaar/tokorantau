import React, { useState } from 'react';
import './List_products.scss';
import pizzaori from '../assets/pizzaori.png';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { FaEye } from 'react-icons/fa';
import { BsFillCartPlusFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import data from '../pages/data';

const List_products = (props) => {
  const [count, setCount] = useState(1);
  const maxCount = 99;
  const minCount = 1;

  const { title, category, price, author, key } = props;

  const incrementCount = () => {
    if (count < maxCount) setCount(count + 1);
  };
  const decrementCount = () => {
    if (count > minCount) setCount(count - 1);
  };

  return (
    <div className="box" key={key}>
      <Link to={`/produk/${key}`} className="quick-view">
        <FaEye />
      </Link>
      <button className="add-cart">
        <BsFillCartPlusFill />
      </button>
      <img src={pizzaori} alt="" className="image"></img>

      <div className="name">{title}</div>
      <a href="#" className="category">
        {category}
      </a>

      <div className="flex">
        <div className="price">
          <span className="grey">€</span>
          {price}
          <span className="grey">/-</span>
        </div>

        <div className="qty">
          <h5 className="value">{count}</h5>
          <div className="counter">
            <button onClick={incrementCount}>
              <MdKeyboardArrowUp />
            </button>
            <button onClick={decrementCount}>
              <MdKeyboardArrowDown />
            </button>
          </div>
        </div>
      </div>

      <Link to="/akun" className="author">
        Dibuat oleh {author}
      </Link>
      <div className="mobile-flex">
        <Link to={'/produk/'} className="mobile-view">
          Kunjungi
        </Link>
        <button className="mobile-add-cart">Tambahkan</button>
      </div>
    </div>
  );
};

export default List_products;
