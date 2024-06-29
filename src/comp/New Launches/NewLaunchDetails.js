import { Box, Container, Stack, Typography } from '@mui/material'
import { doc } from 'firebase/firestore';
import React from 'react'
import { useDocument } from 'react-firebase-hooks/firestore';
import { db } from '../../firebase/config';
import { Link, useParams } from 'react-router-dom';
import ContactUsBtn from '../Contact Us/ContactUsBtn';

function NewLaunchDetails() {
    const { launchId } = useParams()
    const [value, loading, error] = useDocument(doc(db, 'newlaunch', launchId));
    if (error) {
        return (
            <>
                <h1>
                    err
                </h1>
            </>
        )
    }
    if (loading) {
        return (
            <>
                <h2>
                    Loading
                </h2>
            </>
        )
    }

    if (value) {
        return (
            <Box sx={{ padding: { xs: '70px 0 0', sm: '70px 0 0', md: '110px 0 0', } }}>
                <Container>
                    <Stack sx={{ height: { md: '400px', sm: '300px' }, borderRadius: '10px', overflow: 'hidden' }}>
                        {!value.data().video ? <img style={{ width: '100%', height: '100%' }} src={value.data().img[0]} alt='' /> :
                            <video autoPlay style={{ width: '100%', height: '100%' }} controls src={value.data().video} type="video/mp4" />
                        }
                    </Stack>
                    <Stack sx={{ flexDirection: { sm: 'column', md: 'row' }, gap: 4, marginTop: '30px', alignItems: 'center' }}>
                        <Stack>
                            <Link to={`/developers/${value.data().devname}`} style={{ borderRadius: '50%' }} >
                                <img style={{ width: '100px', boxShadow: '0 -1px 15px -3px rgba(0, 0, 0, 0.2)', borderRadius: '50%' }} src={value.data().icon} alt='' />
                            </Link>
                        </Stack>
                        <Stack sx={{ width: '100%' }}>
                            <Stack sx={{ justifyContent: 'center', alignItems: { xs: 'center', md: 'initial' } }}>
                                <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
                                    {value.data().launchName}
                                </Typography>
                            </Stack>
                            <Stack sx={{ flexDirection: { sm: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center' }}>
                                <Stack >
                                    <Typography variant='caption' sx={{ fontWeight: 'bold' }}>
                                        {value.data().devname}
                                    </Typography>
                                    <Typography variant='caption'>
                                        {value.data().Location}
                                    </Typography>
                                    {value.data().price &&
                                        <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
                                            {` ${value.data().price} EGP `}
                                            <span style={{ fontWeight: 'normal', fontSize: '14px' }}>
                                                Start Price
                                            </span>
                                        </Typography>
                                    }
                                </Stack>
                                <Stack>
                                    <ContactUsBtn />
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                    <hr />

                    <Stack sx={{ marginTop: '40px' }}>
                        {value.data().Dis || value.data().dis6 || value.data().dis7 || value.data().dis8 || value.data().dis2 || value.data().dis3 || value.data().dis4 || value.data().details ?
                            <Stack>
                                <Typography variant='h5' sx={{ fontWeight: 'bold', padding: '0 0 10px 0' }}>
                                    Launch Details
                                </Typography>
                                <Typography>
                                    {value.data().Dis}
                                </Typography>
                                <Typography>
                                    {value.data().dis6}
                                </Typography>
                                <Typography>
                                    {value.data().dis7}
                                </Typography>
                                <Typography>
                                    {value.data().dis8}
                                </Typography>
                                <Typography>
                                    {value.data().dis2}
                                </Typography>
                                <Typography>
                                    {value.data().dis3}
                                </Typography>
                                <Typography>
                                    {value.data().dis4}
                                </Typography>
                                <Typography>
                                    {value.data().details}
                                </Typography>
                            </Stack>
                            :
                            console.log("not")
                        }
                        {/* { ?
                            <Stack>
                                <Typography variant='h5' sx={{ fontWeight: 'bold', padding: '10px 0' }}>
                                    Launch Description
                                </Typography>

                            </Stack>
                            :
                            console.log("not")
                        } */}
                    </Stack>
                </Container>
            </Box>
        )

    }
}

export default NewLaunchDetails