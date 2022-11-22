import React from 'react';
import './Order.scss';

const Order = () => {
  return (
    <div className="order">
      <h1 className="title-order">Belanjaan anda</h1>

      <div className="cart-total">
        <p>
          cart total : <span>€9</span>
        </p>

        <a href="checkout.html" class="btn">
          proceed to checkout
        </a>
      </div>
    </div>
  );
};

export default Order;
