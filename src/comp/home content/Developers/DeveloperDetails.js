import { doc } from 'firebase/firestore';
import React, { useState } from 'react'
import { useDocument } from 'react-firebase-hooks/firestore';
import { db } from '../../../firebase/config';
import { Link, useParams } from 'react-router-dom';
import { Box, Card, CardContent, Container, Divider, Stack, Typography } from '@mui/material';
import { Col, Row } from 'react-bootstrap';
import ContactUsIcon from '../../Contact Us/ContactUsIcon';

export default function DeveloperDetails() {
    const { devId } = useParams()
    const [value, loading, error] = useDocument(doc(db, 'admin', devId));
    let list = []
    if (value) {
        const ul = value.data().devDis6.split('-')
        for (let i = 1; i < ul.length; i++) {
            list = [...list, ul[i]]
        }
        return (

            <Box sx={{ padding: '80px 0 0 0' }}>
                <Container  >
                    <Stack sx={{ flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <Stack sx={{ flexDirection: 'row', alignItems: 'center', gap: 3 }}>
                            <img style={{ width: '70px', boxShadow: '0 -1px 15px -3px rgba(0, 0, 0, 0.2)', borderRadius: '50%' }} src={value.data().devIcon} alt='' />
                            <Typography sx={{ fontWeight: 'bold', color: '#1e4164 ' }} variant='h5' component='h2'>
                                {value.data().devName}
                            </Typography>
                        </Stack>
                        <span className="text-2" data-test="entity-type">Developer</span>
                    </Stack>
                    <Divider />
                    <Box sx={{ padding: '50px 0 0 0' }}>
                        <Typography sx={{ fontWeight: 'bold', color: '#1e4164 ', padding: '10px 0' }} >
                            {`About ${value.data().devName}`}
                        </Typography>
                        <Typography>
                            {value.data().devDis}
                        </Typography>
                        <Typography>
                            {value.data().devDis2}
                        </Typography>
                        <Typography>
                            {value.data().devDis3}
                        </Typography>
                        <Typography>
                            {value.data().devDis4}
                        </Typography>
                        <Typography>
                            {value.data().devDis5}
                        </Typography>
                        <ul>
                            {list.map((li) => {
                                return (
                                    <li key={li}>
                                        {li}
                                    </li>
                                )
                            })}
                        </ul>
                        <Stack>
                            <Typography sx={{ padding: '10px 0', fontWeight: 'bold', color: '#1e4164 ' }} >
                                {`Explore projects In ${value.data().devName}`}
                            </Typography>
                            <Row>
                                {value.data().dev.map((project, index) => {
                                    return (
                                        <Col key={index} className="col-md-6 col-12 col-lg-4" style={{ marginBottom: '15px', position: 'relative' }} >
                                            <Link to={`/developers/${devId}/${project.proj}`} style={{ textDecoration: 'none' }}>
                                                <Card sx={{ position: 'relative' }}>
                                                    <Box sx={{ height: '216px' }}>
                                                        <img style={{ height: '100%', width: '100%', objectFit: 'cover' }} src={project.projImgs[0]} alt='' />
                                                    </Box>
                                                    <CardContent>
                                                        <Stack sx={{ marginBottom: '10px' }}>
                                                            <Typography sx={{ lineHeight: '1.3', fontWeight: 'bold', color: 'rgb(30, 65, 100)' }} variant="body1">
                                                                {project.proj}
                                                            </Typography>
                                                            <Typography variant="caption" sx={{ color: " rgb(100, 100, 100) ", lineHeight: '1', padding: '0 0 0 5px' }}>
                                                                {project.Location}
                                                            </Typography>
                                                        </Stack>
                                                        {/* <Typography sx={{ fontWeight: 'bold' }}>
                                                            {`${project.price} EGP`}
                                                        </Typography> */}
                                                    </CardContent>
                                                </Card>
                                            </Link >
                                            <ContactUsIcon />
                                        </Col>
                                    )
                                })}
                            </Row>
                        </Stack>
                    </Box>

                </Container>
            </Box>
        )
    }
}
