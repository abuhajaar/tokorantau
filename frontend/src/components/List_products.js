import React, { useState } from 'react';
import classes from './List_products.module.scss';
import pizzaori from '../assets/pizzaori.png';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { MdKeyboardArrowDown } from 'react-icons/md';

const List_products = () => {
  const [count, setCount] = useState(1);
  const maxCount = 99;
  const minCount = 1;

  const incrementCount = () => {
    if (count < maxCount) setCount(count + 1);
  };
  const decrementCount = () => {
    if (count > minCount) setCount(count - 1);
  };

  return (
    <section className={classes.product}>
      <h1 className={classes.product__tittle}>Latest Product</h1>
      <div className={classes.product__container}>
        <div className={classes.product__container__box}>
          <img
            src={pizzaori}
            alt=""
            className={classes.product__container__box__image}
          ></img>
          <a href="#" className={classes.product__container__box__category}>
            makanan
          </a>
          <div className={classes.product__container__box__name}>Baso aci</div>
          <div className={classes.product__container__box__flex}>
            <div className={classes.product__container__box__flex__price}>
              3€
            </div>

            <div className={classes.product__container__box__flex__qty}>
              <h5 className={classes.product__container__box__flex__qty__value}>
                {count}
              </h5>
              <div
                className={classes.product__container__box__flex__qty__counter}
              >
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

        <div className={classes.product__container__box}>
          <img
            src={pizzaori}
            alt=""
            className={classes.product__container__box__image}
          ></img>
          <a href="#" className={classes.product__container__box__category}>
            makanan
          </a>
          <div className={classes.product__container__box__name}>Baso aci</div>
          <div className={classes.product__container__box__flex}>
            <div className={classes.product__container__box__flex__price}>
              3€
            </div>
            <div className={classes.product__container__box__flex__qty}>
              <h5 className={classes.product__container__box__flex__qty__value}>
                {count}
              </h5>
              <div
                className={classes.product__container__box__flex__qty__counter}
              >
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

        <div className={classes.product__container__box}>
          <img
            src={pizzaori}
            alt=""
            className={classes.product__container__box__image}
          ></img>
          <a href="#" className={classes.product__container__box__category}>
            makanan
          </a>
          <div className={classes.product__container__box__name}>Baso aci</div>
          <div className={classes.product__container__box__flex}>
            <div className={classes.product__container__box__flex__price}>
              3€
            </div>
            <div className={classes.product__container__box__flex__qty}>
              <h5 className={classes.product__container__box__flex__qty__value}>
                {count}
              </h5>
              <div
                className={classes.product__container__box__flex__qty__counter}
              >
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

        <div className={classes.product__container__box}>
          <img
            src={pizzaori}
            alt=""
            className={classes.product__container__box__image}
          ></img>
          <a href="#" className={classes.product__container__box__category}>
            makanan
          </a>
          <div className={classes.product__container__box__name}>Baso aci</div>
          <div className={classes.product__container__box__flex}>
            <div className={classes.product__container__box__flex__price}>
              3€
            </div>
            <div className={classes.product__container__box__flex__qty}>
              <h5 className={classes.product__container__box__flex__qty__value}>
                {count}
              </h5>
              <div
                className={classes.product__container__box__flex__qty__counter}
              >
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

        <div className={classes.product__container__box}>
          <img
            src={pizzaori}
            alt=""
            className={classes.product__container__box__image}
          ></img>
          <a href="#" className={classes.product__container__box__category}>
            makanan
          </a>
          <div className={classes.product__container__box__name}>Baso aci</div>
          <div className={classes.product__container__box__flex}>
            <div className={classes.product__container__box__flex__price}>
              3€
            </div>
            <div className={classes.product__container__box__flex__qty}>
              <h5 className={classes.product__container__box__flex__qty__value}>
                {count}
              </h5>
              <div
                className={classes.product__container__box__flex__qty__counter}
              >
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

        <div className={classes.product__container__box}>
          <img
            src={pizzaori}
            alt=""
            className={classes.product__container__box__image}
          ></img>
          <a href="#" className={classes.product__container__box__category}>
            makanan
          </a>
          <div className={classes.product__container__box__name}>Baso aci</div>
          <div className={classes.product__container__box__flex}>
            <div className={classes.product__container__box__flex__price}>
              3€
            </div>
            <div className={classes.product__container__box__flex__qty}>
              <h5 className={classes.product__container__box__flex__qty__value}>
                {count}
              </h5>
              <div
                className={classes.product__container__box__flex__qty__counter}
              >
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
