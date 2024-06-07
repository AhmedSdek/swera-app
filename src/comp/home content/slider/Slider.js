import { data } from '../../Data';
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination,Autoplay,Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./slider.css";

// import required modules

import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Slider() {
  return (
    <>
    <section className='slider-section'>
    <Container>
      <h2 className='section-title' style={{textAlign:'center'}}>Choose From 400 Real Estate Projects In Egypt</h2>
      <Swiper
        slidesPerView={7}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
          dynamicBullets:true
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation,FreeMode]}
        className="mySwiper"
        breakpoints={{
          200: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20,
          },
          // when window width is >= 480px
			767: {
				slidesPerView: 4,
				slidesPerGroup: 1,
				spaceBetween: 10,

			},
			992: {
				slidesPerView: 8,
				slidesPerGroup: 1,
				spaceBetween: 20
			},
			1200: {
				slidesPerView: 8,
				slidesPerGroup: 1,
				spaceBetween: 20
			},
			1400: {
				slidesPerView: 8,
				spaceBetween: 20
			}
        }}
      >
            {data.map((product) => {
          return(
            <SwiperSlide style={{ borderRadius: '50%' }} key={product.id}>
              <Link to={`/product/${product.id}`}>
                <img className='sm-shadow w-shadow mx-auto img-fluid bg-white rounded-circle p-md-2 p-1 img-fluid  ' style={{ borderRadius: '50%', cursor: 'pointer' }} src={product.image} alt=''></img>
              </Link>
            </SwiperSlide>
          )
        })}
      </Swiper>
        </Container> 
    </section>
    </>
  );
}
