import { doc } from "firebase/firestore";
import { useDocument } from "react-firebase-hooks/firestore";
import { useParams } from "react-router-dom";
import { Box, Card, Container, Divider, Stack, Typography } from "@mui/material";
import { Col, Row } from "react-bootstrap";
import { db } from "../../firebase/config";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';


function DealDetails() {

    let { dealId } = useParams();
    const [value, loading, error] = useDocument(doc(db, 'Resell', dealId));
    if (loading) {
        return (
            <h2>loading</h2>
        )
    }
    if (value) {
        return (
            <Box sx={{ marginTop: '56px', padding: '15px 0' }}>
                <Container>
                    <Row >
                        <Swiper
                            effect={'coverflow'}
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={'auto'}
                            coverflowEffect={{
                                rotate: 50,
                                stretch: 0,
                                depth: 100,
                                modifier: 1,
                                slideShadows: true,
                            }}
                            
                            modules={[EffectCoverflow, Pagination]}
                            className="mySwiper"
                        >
                            {value.data().img.map((el, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <img src={el} alt="" />
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                        <Col>
                            <div style={{ lineHeight: '1',margin:'10px 0 40px' }}>
                                <Typography component='h2' variant="h5" sx={{ color: 'rgb(30, 65, 100)', lineHeight: '1',fontWeight:'bold' }}>
                                    {` ${value.data().imgtext}`}
                                </Typography>
                                <Typography variant="caption" sx={{ lineHeight: '1' }}>
                                    {` ${value.data().Location}`}
                                </Typography>
                                <Typography sx={{ fontWeight: 'bold', margin: '10px 0 !important',color:'black' }}>
                                {value.data().price} EGP
                                </Typography>
                            </div>
                            <Typography component='h3' variant="h5" sx={{ color: 'rgb(30, 65, 100)',fontWeight:'bold' }}>
                                About
                            </Typography>
                            <hr />
                            <Typography>
                                {`${value.data().Type}`}
                            </Typography>
                            <Typography>
                                {`Finishing : ${value.data().Finsh}`}
                            </Typography>
                            <Typography>
                                {`Reference No.  : ${value.data().refNum}`}
                            </Typography>
                            <Typography>
                                {`Bedrooms : ${value.data().Bed}`}
                            </Typography>
                            <Typography>
                                {`Bathrooms : ${value.data().Bath}`}
                            </Typography>
                            <Typography>
                                {`Arya : ${value.data().Area} m²`}
                            </Typography>

                            <Stack sx={{ flexDirection: 'row', gap: 2 }}>
                                <div>
                                    <img style={{ width: '60px', height: '60px' }} src={value.data().Layoutimg} alt="" />
                                    <p>
                                        Layoutimg
                                    </p>
                                </div>
                                <div>
                                    <img style={{ width: '60px', height: '60px' }} src={value.data().Masterimg} alt="" />
                                    <p>
                                        Masterimg
                                    </p>
                                </div>
                            </Stack>
                            <Typography>
                                {`${value.data().Dis}`}
                            </Typography>

                            <Typography>
                                About:  {value.data().dis3}
                            </Typography>
                        </Col>
                        <Divider />
                    </Row>
                </Container>
            </Box>
        )
    }
}

export default DealDetails


// export default function DealDetails() {
//     return (
//         <>
//             <Swiper
             
//             >
//                 {value.data().img.map((el, index) => {
//                     return (
//                         <SwiperSlide key={index}>
//                             <img src={el} alt="" />
//                         </SwiperSlide>
//                     )
//                 })}
//             </Swiper>
//         </>
//     );
// }
