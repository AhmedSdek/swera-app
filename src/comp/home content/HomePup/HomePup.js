import { Button, IconButton, Stack } from '@mui/material'
import React from 'react'
import img from './Blue and White Minimalist Real Estate Investment Tips Checklist Instagram Story (7).webp'
import { Close } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
function HomePup({ setPup, pup }) {
    const nav = useNavigate()
    return (
        <Stack sx={{ position: 'fixed', top: '0', width: '100%', backgroundColor: '#ffffff52', zIndex: '100', height: 'calc(100vh)', paddingTop: '58px', justifyContent: 'center', alignItems: 'center', scale: pup, transition: '0.5s' }}>
            <div style={{ position: 'relative' }}>
                <img style={{ width: '300px', height: '500px' }} src={img} alt='Sell-Rent your Property' />
                <IconButton onClick={() => setPup(0)} sx={{ position: 'absolute', top: '0', right: '0', color: "white" }}>
                    <Close />
                </IconButton>
                <Button
                    onClick={() => {
                        nav('/sell')
                    }}
                    variant='contained' sx={{ position: 'absolute', bottom: '5px', right: 'calc(50% - 47px)', backgroundColor: '#ff6e19', color: 'white', borderRadius: '20px', fontWeight: 'bold', padding: '5px 10px 2px' }}>
                    List Now
                </Button>
            </div>
        </Stack>
    )
}

export default HomePup