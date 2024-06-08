import { doc } from "firebase/firestore";
import { useDocument } from "react-firebase-hooks/firestore";
import { useParams } from "react-router-dom";
import { Box, Card, Container, Divider, Stack, Typography } from "@mui/material";
import { Col, Row } from "react-bootstrap";
import { db } from "../../firebase/config";
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
        console.log(value.data())
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
                            pagination={false}
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
                            <div style={{ lineHeight: '1' }}>
                                <Typography component='h2' variant="h4" sx={{ color: 'rgb(30, 65, 100)', lineHeight: '1' }}>
                                    {` ${value.data().dis2}`}
                                </Typography>
                                <Typography variant="caption" sx={{ lineHeight: '1' }}>
                                    {`Location : ${value.data().Location}`}
                                </Typography>
                            </div>
                            <Typography sx={{ fontWeight: 'bold', margin: '10px 0 !important' }}>
                                {value.data().price} EGP
                            </Typography>
                            <Typography>
                                {`Type : ${value.data().Type}`}
                            </Typography>
                            <Typography>
                                {`Finsh : ${value.data().Finsh}`}
                            </Typography>
                            <Typography>
                                {`BedRoom : ${value.data().Bed}`}
                            </Typography>
                            <Typography>
                                {`BathRoom : ${value.data().Bath}`}
                            </Typography>
                            <Typography>
                                {`Area : ${value.data().Area}`}
                            </Typography>
                            <Typography>
                                {`Dis : ${value.data().Dis}`}
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