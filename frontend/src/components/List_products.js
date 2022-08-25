import React, { useState } from 'react';
import './List_products.scss';
import pizzaori from '../assets/pizzaori.png';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { MdKeyboardArrowDown } from 'react-icons/md';

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
    <section className="product">
      <div className="container">
        <div className="box">
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
        </div>
      </div>
    </section>
  );
};

export default List_products;
