import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import img from './SAHE L MAP.webp'
import { Container } from '@mui/material'
function SahelMap() {
    return (

        <Container>
            <div style={{ height: '145px' }}>
                <Link aria-label="sahel-map" to='/sahelmap' className='saheldev' >
                    <div className='videodev' style={{ width: '100%', height: '100%', position: 'relative', margin: '40px 0' }}>
                        <div style={{ width: '100%', height: '100%', position: 'relative', borderRadius: '8px', overflow: 'hidden' }}>
                            <img style={{
                                width: '100%',
                                height: '100%'
                            }} src={img} alt='' />
                            {/* <div
                                className='over' >
                            </div> */}
                        </div>
                    </div>
                </Link>

            </div>
        </Container>
    )
}

export default SahelMap