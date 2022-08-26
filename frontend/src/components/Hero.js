import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import produk1 from '../assets/pizzaori.png';
import produk2 from '../assets/burgerori.png';
import produk3 from '../assets/chickenori.png';
import './Hero.scss';

import { Autoplay, EffectFlip, Navigation, Pagination } from 'swiper';

const Hero = () => {
  return (
    <div className="hero">
      <Swiper
        speed={1000}
        autoplay={{
          delay: 4000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        loop={true}
        effect={'flip'}
        grabCursor={true}
        pagination={{ clickable: true }}
        modules={[Autoplay, EffectFlip, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="slide">
          <div className="content">
            <span>Pesan Online</span>
            <h3>Delicious Pizza</h3>
            <a>by siapa</a>
            <a href="#" class="btn">
              Kunjungi Toko
            </a>
          </div>
          <div className="image">
            <img src={produk1}></img>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="content">
            <span>Pesan Online</span>
            <h3>Delicious Pizza</h3>
            <a>by siapa</a>
            <a href="#" class="btn">
              Kunjungi Toko
            </a>
          </div>
          <div className="image">
            <img src={produk2}></img>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="content">
            <span>Pesan Online</span>
            <h3>Delicious Pizza</h3>
            <a>by siapa</a>
            <a href="#" class="btn">
              Kunjungi Toko
            </a>
          </div>
          <div className="image">
            <img src={produk3}></img>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
