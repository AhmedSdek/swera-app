import { Call, WhatsApp } from '@mui/icons-material'
import { IconButton, Stack } from '@mui/material'
import React from 'react'

function ContactUsIcon() {
    return (
        <Stack sx={{ flexDirection: 'row', gap: 2, justifyContent: 'end' }}>
            <a href="tel:+201008582515">
                <IconButton variant='contained' sx={{ backgroundColor: 'rgb(228, 235, 242)', color: 'rgb(30, 65, 100)', fontWeight: 'bold' }}>
                    <Call />
                </IconButton>
            </a>
            <a href='https://wa.me/+201008582515'>
                <IconButton className='whatsbtn' variant='contained' sx={{ backgroundColor: 'rgb(76, 217, 100)', color: 'white', fontWeight: 'bold', transition: '0.3s' }}>
                    <WhatsApp />
                </IconButton>
            </a>
        </Stack>
    )
}

export default ContactUsIcon