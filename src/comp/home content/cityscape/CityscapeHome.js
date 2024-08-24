import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import img from './img.jpg'

function CityscapeHome() {
    return (
        <Container>
            <div style={{ marginTop: '15px' }}>
                <Stack sx={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5px' }}>
                    <Typography sx={{ fontWeight: 'bold' }}>
                        Cityscape
                    </Typography>
                </Stack >
                <Link aria-label="sahel-map" to='/cityscapeprojects' className='saheldev' style={{ display: 'inline-block', height: 'fit-content', width: '100%' }} >
                    <Box className='videodev' sx={{ width: '100%', height: { xs: '100px', sm: '150px', md: '180px' }, position: 'relative' }}>
                        <div style={{ width: '100%', height: '100%', position: 'relative', borderRadius: '8px', overflow: 'hidden' }}>
                            <img style={{
                                width: '100%',
                                height: '100%'
                            }} src={img} alt='' />
                        </div>
                    </Box>
                </Link>
            </div>
        </Container>
    )
}

export default CityscapeHome