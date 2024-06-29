import { Call, WhatsApp } from '@mui/icons-material'
import { Button, Stack } from '@mui/material'
import React from 'react'

function ContactUsBtn() {
    return (
        <Stack sx={{ flexDirection: 'row', gap: 2 }}>
            <a href="tel:+201008582515">
                <Button variant='contained' sx={{ backgroundColor: 'rgb(228, 235, 242)', color: 'rgb(30, 65, 100)', fontWeight: 'bold' }}>
                    <Call />
                    Call Us
                </Button>
            </a>
            <a href='https://wa.me/+201008582515'>
                <Button variant='contained' sx={{ backgroundColor: 'rgb(76, 217, 100)', color: 'white', fontWeight: 'bold' }}>
                    <WhatsApp />
                    Whats App
                </Button>
            </a>
        </Stack>
    )
}

export default ContactUsBtn