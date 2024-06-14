import { data } from '../../Data';
import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay, Navigation } from 'swiper/modules';

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./slider.css";

// import required modules
import { useCollection } from 'react-firebase-hooks/firestore';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { collection } from 'firebase/firestore';
import { db } from '../../../firebase/config';

export default function Slider() {
  const [value, loading, error] = useCollection(collection(db, 'admin'));
  // const [data, setData] = useState([])
  if (value) {

    return (

      <section className='slider-section'>
        <Container>
          <h2 className='section-title' style={{ textAlign: 'center' }}>Choose From 400 Real Estate Projects In Egypt</h2>
          <Swiper
            slidesPerView={7}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
              dynamicBullets: true
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation, FreeMode]}
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

            {value.docs.map((item, index) => {
              // console.log(item.data())
              return (
                <SwiperSlide key={index} style={{ borderRadius: '50%' }} >
                  <Link to={`/developers/${item.data().devName}`} >
                    <img className='sm-shadow w-shadow mx-auto img-fluid bg-white rounded-circle p-md-2 p-1 img-fluid  ' style={{ borderRadius: '50%', cursor: 'pointer' }} src={item.data().devIcon} alt=''></img>
                  </Link>
                </SwiperSlide>
              )
            })}

          </Swiper>
        </Container>
    </section>
    )

    // console.log(value.docs)
    // return (
    //   <>
    //     <section className='slider-section'>
    //       <Container>
    //         <h2 className='section-title' style={{ textAlign: 'center' }}>Choose From 400 Real Estate Projects In Egypt</h2>
    //         <Swiper
    //           slidesPerView={7}
    //           spaceBetween={30}
    //           freeMode={true}
    //           pagination={{
    //             clickable: true,
    //             dynamicBullets: true
    //           }}
    //           autoplay={{
    //             delay: 2500,
    //             disableOnInteraction: false,
    //           }}
    //           navigation={true}
    //           modules={[Autoplay, Pagination, Navigation, FreeMode]}
    //           className="mySwiper"
    //           breakpoints={{
    //             200: {
    //               slidesPerView: 3,
    //               slidesPerGroup: 1,
    //               spaceBetween: 20,
    //             },
    //             // when window width is >= 480px
    //             767: {
    //               slidesPerView: 4,
    //               slidesPerGroup: 1,
    //               spaceBetween: 10,

    //             },
    //             992: {
    //               slidesPerView: 8,
    //               slidesPerGroup: 1,
    //               spaceBetween: 20
    //             },
    //             1200: {
    //               slidesPerView: 8,
    //               slidesPerGroup: 1,
    //               spaceBetween: 20
    //             },
    //             1400: {
    //               slidesPerView: 8,
    //               spaceBetween: 20
    //             }
    //           }}
    //         >
    //           {/* {value.docs.map((e, index) => {
    //             // console.log(e.data())
    //             // هعمل اللوب الاول في ستيت واخدز واعمل عليه لوب تاني تحت
    //             return (
    //               <div key={index}>
    //                 {e.data().dev.map((item, inde) => {
    //                   return (

    //                     <SwiperSlide style={{ borderRadius: '50%' }} key={inde}>
    //                       <Link to={`/developers/${item.devName}`} >
    //                         <img className='sm-shadow w-shadow mx-auto img-fluid bg-white rounded-circle p-md-2 p-1 img-fluid  ' style={{ borderRadius: '50%', cursor: 'pointer' }} src={item.devIcon} alt=''></img>
    //                       </Link>
    //                     </SwiperSlide>
    //                   )
    //                 })}
    //               </div>
    //             )
    //           })} */}
    //         </Swiper>
    //       </Container>
    //     </section>
    //   </>
    // );
  }
}
