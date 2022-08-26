import React, { useState } from 'react';
import './List_products.scss';
import pizzaori from '../assets/pizzaori.png';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { FaEye } from 'react-icons/fa';
import { BsFillCartPlusFill } from 'react-icons/bs';

const List_products = (props) => {
  const [count, setCount] = useState(1);
  const maxCount = 99;
  const minCount = 1;

  const { title, category, price, author } = props;

  const incrementCount = () => {
    if (count < maxCount) setCount(count + 1);
  };
  const decrementCount = () => {
    if (count > minCount) setCount(count - 1);
  };

  return (
    <div className="box">
      <button className="quick-view">
        <FaEye />
      </button>
      <button className="add-cart">
        <BsFillCartPlusFill />
      </button>
      <img src={pizzaori} alt="" className="image"></img>
      <a href="#" className="category">
        {category}
      </a>
      <div className="name">{title}</div>
      <a href="#" className="author">
        {author}
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
      <div className="mobile-flex">
        <button className="mobile-view">Kunjungi</button>
        <button className="mobile-add-cart">Tambahkan</button>
      </div>
    </div>
  );
};

export default List_products;
