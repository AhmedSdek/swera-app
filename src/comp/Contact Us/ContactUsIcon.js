import { Call, WhatsApp } from '@mui/icons-material'
import { IconButton, Stack } from '@mui/material'
import React from 'react'

function ContactUsIcon() {
    return (
        <Stack sx={{ flexDirection: 'row', gap: 2, position: 'absolute', bottom: '18px', right: '22px' }}>
            <a href="tel:+201008582515">
                <IconButton variant='contained' sx={{ backgroundColor: 'rgb(228, 235, 242)', color: 'rgb(30, 65, 100)', fontWeight: 'bold' }}>
                    <Call />
                </IconButton>
            </a>
            <a href='https://wa.me/+201008582515'>
                <IconButton variant='contained' sx={{ backgroundColor: 'rgb(76, 217, 100)', color: 'rgb(30, 65, 100)', fontWeight: 'bold' }}>
                    <WhatsApp />
                </IconButton>
            </a>
        </Stack>
    )
}

export default ContactUsIcon