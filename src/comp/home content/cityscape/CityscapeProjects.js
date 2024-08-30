import { WhatsApp } from '@mui/icons-material'
import '../Developers/developers.css';
import { Box, Button, Card, Container, Divider, IconButton, Stack, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { db } from '../../../firebase/config';
import MavLoading from '../../Loading/MavLoading';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ContactUsIcon from '../../Contact Us/ContactUsIcon';
import HomeForm from '../Home Form/HomeForm';
function CityscapeProjects() {
    const [open, setOpen] = useState(false)
    const [value, loading, error] = useCollection(collection(db, 'cityscape'));
    if (value) {

        return (
            <Box sx={{ minHeight: 'calc(100vh - 100px)' }}>
                <Container>
                    <Stack sx={{ paddingTop: '60px' }}>
                        <Stack sx={{ flexDirection: { lg: 'row', md: 'column' }, gap: { lg: 2, md: 0 }, marginBottom: '15px' }}>
                            <Stack sx={{ padding: { lg: '20px 0 0', xs: '20px 0 0 0' }, width: { lg: '70%', md: '100%' } }}>
                                <Typography variant='h5' component='h1' >
                                    <strong style={{ color: '#ff914d' }}>
                                        Cityscape Egypt
                                    </strong>
                                    &nbsp;
                                    is the largest and most important real estate exhibition in the Egypt and Africa.
                                </Typography>
                                <Typography>
                                    Supported by public and private sectors connecting investors , and developers to unique oppoetunities throughout the country .
                                </Typography>
                            </Stack>
                            {/* <Stack sx={{ width: { lg: '30%', md: '100%' }, padding: { md: '20px 0 0', xs: '0' }, alignItems: 'end' }}>
                                <ContactUsBtn sectionName='Cityscape' />
                            </Stack> */}
                        </Stack>
                        <Row>
                            {value.docs.map((project, index) => {
                                return (
                                    <Col className=" col-sm-6 col-12 col-lg-3 col-md-6" style={{ marginBottom: '15px', position: 'relative', maxHeight: '100%' }} key={index}>
                                        <Card sx={{ padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f6f7f7', position: 'relative', overflow: 'initial', gap: 2 }}>
                                            {/* <Stack sx={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

                                                <Typography sx={{ fontWeight: 'bold', color: '#515151' }}>
                                                    Cityscape
                                                </Typography>
                                            </Stack> */}
                                            <Stack className='colDev' sx={{ flexDirection: 'row', alignItems: 'center', gap: 2, width: '100%' }}>
                                                <Link to={`/developers/${project.data().devname}`}>
                                                    <img className=" img shadow-filter " style={{ width: '60px', height: '60px', borderRadius: '50%' }} src={project.data().icon} alt='' />
                                                </Link>
                                                <Stack>
                                                    <Typography sx={{ fontWeight: 'bold' }}>
                                                        {project.data().projectName}
                                                    </Typography>
                                                    <Typography variant='caption'>
                                                        {project.data().devname}
                                                    </Typography>
                                                </Stack>
                                            </Stack>


                                            <Stack sx={{ gap: 2, alignItems: 'center', width: '100%' }}>
                                                <Stack divider={<Divider sx={{ borderColor: 'black', opacity: '1', borderWidth: '1px' }} />} sx={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                                                    <Stack sx={{ padding: '5px 10px ', alignItems: 'center' }}>
                                                        <Typography sx={{ fontWeight: 'bold', color: '#ff914d', fontSize: '20px' }}>
                                                            {`${project.data().pers1}%`}
                                                        </Typography>
                                                        <Typography>
                                                            Downpayment
                                                        </Typography>
                                                    </Stack>

                                                    <Stack sx={{ padding: '5px 10px ', alignItems: 'center' }}>
                                                        <Typography sx={{ fontWeight: 'bold', color: '#ff914d', fontSize: '20px' }}>
                                                            {`${project.data().year1} Years`}
                                                        </Typography>
                                                        <Typography>
                                                            Installments
                                                        </Typography>
                                                    </Stack>
                                                </Stack>
                                                <Stack sx={{ flexDirection: 'row', gap: 1 }}>
                                                    <Typography sx={{ fontWeight: 'bold', fontSize: '20px' }}>
                                                        Cash Discount
                                                    </Typography>
                                                    <Typography sx={{ fontWeight: 'bold', color: '#ff914d', fontSize: '20px' }}>
                                                        {`${project.data().CashDiscount}%`}
                                                    </Typography>
                                                </Stack>
                                            </Stack>
                                            <Divider sx={{ borderColor: 'white', opacity: '1', borderWidth: '1px', width: '100%', borderStyle: 'dashed' }} />
                                            <Stack
                                                sx={{ width: '100%', flexDirection: 'row', gap: 1 }}>
                                                {/* <a target='_blank' style={{ width: 'fit-content' }} href={`https://wa.me/+201008582515?text=project%20Name%20:%20${project.data().projectName}.%0Adeveloper%20Name%20:%20${project.data().devname}.`}>
                                                    <Tooltip title="whatsApp">
                                                        <IconButton>
                                                            <WhatsApp sx={{ color: 'green' }} />
                                                        </IconButton>
                                                    </Tooltip>
                                                </a> */}
                                                <ContactUsIcon sectionName='Cityscape' sectionData={project.data()} />
                                                <Button
                                                    onClick={() => {
                                                        setOpen(true);
                                                        console.log(open)
                                                    }}
                                                    sx={{ width: '100%', backgroundColor: '#ff914d', fontWeight: 'bold' }} variant='contained' >
                                                    Get Offer
                                                </Button>
                                            </Stack>
                                            {/* <Stack sx={{ position: 'absolute', top: '-20px', right: '-20px', backgroundColor: '#ff914d', borderRadius: '50%', width: '70px', height: '70px', justifyContent: 'center', alignItems: 'center', color: 'white', padding: '2px', gap: '3px', rotate: '-5deg', boxShadow: '-8px 5px 1px #0000007a' }}>
                                                <Typography variant='caption' sx={{ fontWeight: 'bold', lineHeight: '1' }}>
                                                    Cityscape
                                                </Typography>
                                                <Typography variant='caption' sx={{ fontWeight: 'bold', fontSize: '15px', lineHeight: '1' }}>
                                                    OFFER
                                                </Typography>
                                            </Stack > */}
                                        </Card>
                                    </Col>
                                )
                            })}
                        </Row>
                        <Stack>
                            <HomeForm />
                        </Stack>
                        <Typography sx={{ margin: '10px !important' }}>
                            Cityscape is Egypt’s annual international real estate show. It gives a unique chance for the real estate sector to assemble house purchasers in one location.
                        </Typography>
                        <Typography sx={{ margin: '10px !important' }}>
                            Cityscape, Egypt’s premier real estate investment, development, and networking event, returns to the Egypt International Exhibition Center from 22-25 September 2021 to commemorate its tenth anniversary (EIEC). To investors and homebuyers, visit and explore new investment opportunities, one-of-a-kind bargains, household projects, and compounds in Egypt and abroad. Over the last decade, Cityscape has grown to become Egypt’s most well-known real estate event brand, attracting thousands of attendees from the Middle East and North Africa.
                        </Typography>
                        <Typography sx={{ margin: '10px !important' }}>
                            Who is responsible for this occurrence?
                            Cityscape Egypt is a subsidiary of Informa PLC’s Informa Markets business. Informa is a globally recognised leader in events, intelligence, and academic research. They are committed to assisting professionals. They assist businesses and professionals via hundreds of firms in specialised fields. They help their clients in expanding their network, gaining access to knowledge, and taking advantage of chances that enable them to grow, perform, and develop insight and understanding.
                        </Typography>
                        <Typography sx={{ margin: '10px !important' }}>
                            Why Should You Visit Cityscape 2021?
                            In Egypt, real estate investment and development is the most well-known, significant, and high-value industrial event. Investors and purchasers may use Cityscape to explore, discover, and locate unique offers, housing projects, and compounds in Egypt and other countries. In 2021, the Egyptian cityscape will grow as a result of its variety. The event will serve as a catalyst for reviving Egypt’s real estate business by bringing together the country’s most important individuals and market participants in a secure environment.
                        </Typography>
                        <Typography sx={{ margin: '10px !important' }}>
                            Attend this event to meet over 50 regional and international property developers that are selling houses and investment opportunities in Egypt starting at only half a million EGP. Additionally, you’ll be able to do price comparisons, see projects, and compare facilities in one convenient location. Additionally, you’ll be able to speak with industry specialists who can assist you in ensuring an excellent purchase method. Additionally, you may take advantage of unique prices, promotions, and an exhibition-only payment plan.
                        </Typography>
                        <Typography sx={{ margin: '10px !important' }}>
                            Face-to-face with Egypt’s finest and most reputable developers.
                            networking with industry experts and assisting in the revival of Egypt’s real estate sector.
                            For homebuyers, one of the greatest ways to locate their future house is to do an online search for their desired property.
                            Consider the latest homes with branded offerings that provide clients the widest range of five-star living from the industry’s leading developers.
                            Get exclusive access to property discounts and offers only for event participants.
                        </Typography>
                        <Typography sx={{ margin: '10px !important' }}>
                            By reducing time spent on property shopping, comparing projects or making comparisons, or organising meetings in many locations, you’ll have more time to focus on your own vibrant joys.
                        </Typography>

                    </Stack>
                </Container>
            </Box>
        )

    }
    if (loading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'calc(100vh - 100px)' }}>
                <MavLoading />
            </div>
        )
    }
}

export default CityscapeProjects