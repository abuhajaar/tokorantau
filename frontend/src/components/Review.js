import React from 'react';
import './Review.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import review1 from '../assets/aiony img 1.jpg';
import review2 from '../assets/oliver img 2.jpg';
import review3 from '../assets/arjunsyah img 3.jpg';
import review4 from '../assets/kevin img 4.jpg';
import { Pagination } from 'swiper';
import { ImStarFull, ImStarHalf } from 'react-icons/im';

const Review = () => {
  return (
    <div className="review">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="slide-review">
          <img src={review1} alt=""></img>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            iste, error commodi, exercitationem asperiores quas illum rerum
            reprehenderit, excepturi incidunt tempora totam odit amet eius.
          </p>
          <div class="stars">
            <ImStarFull />
            <ImStarFull />
            <ImStarFull />
            <ImStarFull />
            <ImStarHalf />
          </div>
          <h3 class="name">John doe</h3>
        </SwiperSlide>
        <SwiperSlide className="slide-review">
          <img src={review2} alt=""></img>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            iste, error commodi, exercitationem asperiores quas illum rerum
            reprehenderit, excepturi incidunt tempora totam odit amet eius.
          </p>
          <div class="stars">
            <ImStarFull />
            <ImStarFull />
            <ImStarFull />
            <ImStarFull />
            <ImStarHalf />
          </div>
          <h3 class="name">John doe</h3>
        </SwiperSlide>
        <SwiperSlide className="slide-review">
          <img src={review3} alt=""></img>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            iste, error commodi, exercitationem asperiores quas illum rerum
            reprehenderit, excepturi incidunt tempora totam odit amet eius.
          </p>
          <div class="stars">
            <ImStarFull />
            <ImStarFull />
            <ImStarFull />
            <ImStarFull />
            <ImStarHalf />
          </div>
          <h3 class="name">John doe</h3>
        </SwiperSlide>
        <SwiperSlide className="slide-review">
          <img src={review4} alt=""></img>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            iste, error commodi, exercitationem asperiores quas illum rerum
            reprehenderit, excepturi incidunt tempora totam odit amet eius.
          </p>
          <div class="stars">
            <ImStarFull />
            <ImStarFull />
            <ImStarFull />
            <ImStarFull />
            <ImStarHalf />
          </div>
          <h3 class="name">John doe</h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Review;
