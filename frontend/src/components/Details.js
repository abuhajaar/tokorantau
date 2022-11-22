import React from 'react';
import './Details.scss';
import { Link, useHistory } from 'react-router-dom';
import data from '../pages/data';
import detail from '../assets/chickenori.png';
import { ImStarFull, ImStarHalf } from 'react-icons/im';

const Details = (props) => {
  const { title, price, author } = props;
  const history = useHistory();

  return (
    <div className="detail">
      <div className="flex-detail">
        <div className="image-detail">
          <img src={detail}></img>
        </div>

        <div className="content-detail">
          <div className="content-top">
            <h1>Chicken Taj Mahal</h1>
            <h4>dibuat pada : 08 October 2022 </h4>
            <h4>dibuat oleh : Adam Bisyahri </h4>

            <div className="stars">
              <ImStarFull />
              <ImStarFull />
              <ImStarFull />
              <ImStarFull />
              <ImStarHalf />
            </div>
          </div>

          <div className="content-mid">
            <h6>Deskripsi produk :</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
              ipsa ea ipsam omnis, nisi facilis velit eum facere, nostrum iste
              nam porro harum sed earum eaque culpa totam, eligendi
              necessitatibus? Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Quaerat ipsa ea ipsam omnis, nisi facilis velit
              eum facere, nostrum iste namrro harum sed earum eaque culpa totam,
              eligendi necessitatibus? Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Quaerat ipsa ea ipsam omnis, nisi facilis velit
              eum facer
            </p>
          </div>

          <div className="row-content">
            <p>140$</p>
            <button className="btn-detail" onClick={() => history.push('/')}>
              Masukan Keranjang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
