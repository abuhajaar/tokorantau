import React from 'react';
import './Steps.scss';
import steps1 from '../assets/food-service.png';
import steps2 from '../assets/mobile-payment.png';
import steps3 from '../assets/delivery-truck.png';

const Steps = () => {
  return (
    <div className="steps">
      <div className="container-steps">
        <div className="box-steps">
          <img src={steps1}></img>
          <h3>Pilih Produk</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
            eveniet asperiores ullam perferendis molestias! Labore facilis rerum
            dolorum doloribus esse.
          </p>
        </div>

        <div className="box-steps">
          <img src={steps2}></img>
          <h3>Bayar dan hubungi penjual</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
            eveniet asperiores ullam perferendis molestias! Labore facilis rerum
            dolorum doloribus esse.
          </p>
        </div>

        <div className="box-steps">
          <img src={steps3}></img>
          <h3>Nikmati pesananmu !</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
            eveniet asperiores ullam perferendis molestias! Labore facilis rerum
            dolorum doloribus esse.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Steps;
