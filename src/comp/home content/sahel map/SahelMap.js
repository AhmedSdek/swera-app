import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import img from './Blue Modern Go To The Beach Facebook Ad (890 x 150 بيكسل) (1).webp'
import { Container } from '@mui/material'
function SahelMap() {
    const [ply, setPlay] = useState(true)
    const vide = document.getElementById('homevid');
    // console.log(vide)
    // vide.addEventListener('click', () => {
    //     console.log('red')
    // })
    return (

        <Container>
            <div style={{ height: '145px' }}>
                <Link aria-label="sahel-map" to='' className='saheldev' >
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