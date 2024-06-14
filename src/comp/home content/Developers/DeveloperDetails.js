import { doc } from 'firebase/firestore';
import React from 'react'
import { useDocument } from 'react-firebase-hooks/firestore';
import { db } from '../../../firebase/config';
import { Link, useParams } from 'react-router-dom';
import { Box, Card, CardContent, Container, Stack, Typography } from '@mui/material';
import { Col } from 'react-bootstrap';

export default function DeveloperDetails() {
    const { devId } = useParams()
    // console.log(devId)
    const [value, loading, error] = useDocument(doc(db, 'admin', devId));

    if (value) {
        return (
            <Container sx={{ margin: '40px 0 0 0' }} >
                {value.data().devName}
                <img src={value.data().devIcon} alt='' />
                <Typography>
                    {value.data().devDis}
                </Typography>
                <Typography>
                    {value.data().devPricesStart}
                </Typography>
                {value.data().dev.map((project, index) => {
                    return (
                        <Col key={index} className=" col-sm-6 col-12" style={{ marginBottom: '15px' }} >
                            <Link to={`/developers/${devId}/${project.proj}`} style={{ textDecoration: 'none' }}>
                                <Card sx={{ position: 'relative' }}>
                                    <Box sx={{ height: '216px' }}>
                                        <img style={{ height: '100%', width: '100%', objectFit: 'cover' }} src={project.projImgs[0]} alt='' />
                                    </Box>
                                    <CardContent>
                                        <Stack>
                                            <Typography sx={{ lineHeight: '1.3', fontWeight: 'bold' }} variant="h6">
                                                {project.proj}
                                            </Typography>
                                            <Typography variant="caption" sx={{ color: " rgb(100, 100, 100) ", lineHeight: '1', padding: '0 0 0 5px' }}>
                                                {project.Location}
                                            </Typography>
                                        </Stack>
                                        <Typography sx={{ fontWeight: 'bold' }}>
                                            {project.price}
                                            EGP
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Link >
                        </Col>
                    )
                })}

            </Container>
        )
    }
}
