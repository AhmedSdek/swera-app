import { Calculate, Close } from '@mui/icons-material'
import { Button, Card, Container, IconButton, Stack, TextField, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap';

function Calc() {
    const [open, setOpen] = useState(false);
    const [total, setTotal] = useState('');
    const [downPayment, setDownPayment] = useState('');
    const [years, setYears] = useState('');
    const [amount, setAmount] = useState(0);
    const [month, setMonth] = useState(0);



    return (
        <>
            <Stack sx={{ position: 'fixed', bottom: '100px', right: '1px', zIndex: '100' }}>
                <Tooltip title="Calculator" sx={{ color: 'white' }}
                    placement="left" slotProps={{
                        popper: {
                            modifiers: [
                                {
                                    name: 'offset',
                                    options: {
                                        offset: [0, -15],
                                    },
                                },
                            ],
                        },
                    }}>
                    <IconButton aria-label='Calculator' onClick={() => setOpen(true)}>
                        <Calculate className='calc' htmlColor='#ff6e19' fontSize='large' />
                    </IconButton>
                </Tooltip>
            </Stack>
            {open &&
                <Stack sx={{ alignItems: 'center', justifyContent: 'center', position: 'fixed', height: '100%', width: '100%', backgroundColor: '#000000d1', zIndex: '200' }}>
                    <Stack sx={{ width: { xs: '90%', md: '50%' }, backgroundColor: 'white', height: 'fit-content', position: 'relative', margin: '50px 0 0', borderRadius: '12px', gap: 2, padding: '50px 0 0' }}>
                        <h1 style={{
                            fontWeight: 'bold',
                            textAlign: 'center',
                            letterSpacing: '0px',
                            fontFamily: 'materialBold',
                            fontSize: '15px',
                            color: 'rgb(30, 65, 100)',
                            textTransform: 'uppercase',
                            letterSpacing: '4.14px',
                        }}>Budget
                            <span style={{
                                color: 'rgb(255 110 25)',
                                fontSize: '30px',
                                verticalAlign: 'middle',
                                letterSpacing: '0px'
                            }}>Calculator</span>
                        </h1>

                        <Card sx={{ height: 'fit-content', padding: '10px' }}>
                            <Stack component='form' sx={{ gap: 2, alignItems: 'center' }} onSubmit={
                                async (e) => {
                                    e.preventDefault()
                                    setAmount(total * downPayment / 100);
                                    setMonth((total - total * downPayment / 100) / (years * 12));
                                }
                            }>
                                <TextField
                                    sx={{ width: '100%' }}
                                    required
                                    id="outlined-required"
                                    label="Total Budget"
                                    type='number'
                                    placeholder='EGP'
                                    value={total}
                                    className='inbutlapel
                                        '
                                    size="small"
                                    onChange={(e) => setTotal(e.target.value)}
                                />
                                <Stack sx={{ flexDirection: { xs: 'column', sm: 'row' }, width: '100%', gap: 2 }}>
                                    <TextField
                                        sx={{ width: '100%' }}
                                        required
                                        id="downPayment"
                                        placeholder='%'
                                        label="Down Payment"
                                        type='number'
                                        size="small"
                                        className='inbutlapel
                                            '
                                        value={downPayment}
                                        onChange={(e) => setDownPayment(e.target.value)}
                                    />
                                    <TextField
                                        sx={{ width: '100%' }}
                                        required
                                        id="years"
                                        size="small"
                                        className='inbutlapel'
                                        label="years Of Installments"
                                        type='number'
                                        placeholder='0'
                                        value={years}
                                        onChange={(e) => setYears(e.target.value)}
                                    />

                                </Stack>
                                <Button className='calcbtn' type='submit' variant='contained' sx={{
                                    width: '50%',
                                    backgroundColor: 'rgb(255 110 25)', color: 'rgb(30, 65, 100)', fontWeight: 'bold'
                                }}>
                                    Calc
                                </Button>
                            </Stack>
                        </Card>
                        <Container>
                            <Row >
                                <Col className='col-lg-6 col-md-6 col-sm-6 col-12' style={{ marginBottom: '10px' }}>
                                    <Typography sx={{ fontWeight: 'bold' }}>
                                        Down Paymant Amount
                                        <Typography sx={{ padding: '2px 10px', borderRadius: '10px', backgroundColor: '#0d4d8f2e', color: 'rgb(255 110 25)', fontWeight: 'bold' }}>
                                            {amount} EGP
                                        </Typography>
                                    </Typography>
                                </Col>
                                <Col className='col-lg-6 col-md-6 col-sm-6 col-12' style={{ marginBottom: '10px' }}>
                                    <Typography sx={{ fontWeight: 'bold' }}>
                                        Monthly Paymant
                                        <Typography sx={{ padding: '2px 10px', borderRadius: '10px', backgroundColor: '#0d4d8f2e', color: 'rgb(255 110 25)', fontWeight: 'bold' }}>
                                            {month} EGP
                                        </Typography>
                                    </Typography>
                                </Col>
                                <Col className='col-lg-6 col-md-6 col-sm-6 col-12' style={{ marginBottom: '10px' }}>
                                    <Typography sx={{ fontWeight: 'bold' }}>
                                        Quarterly payment
                                        <Typography sx={{ padding: '2px 10px', borderRadius: '10px', backgroundColor: '#0d4d8f2e', color: 'rgb(255 110 25)', fontWeight: 'bold' }}>
                                            {month * 3} EGP
                                        </Typography>
                                    </Typography>
                                </Col>
                                <Col className='col-lg-6 col-md-6 col-sm-6 col-12' style={{ marginBottom: '10px' }}>
                                    <Typography sx={{ fontWeight: 'bold' }}>
                                        Annual payment
                                        <Typography sx={{ padding: '2px 10px', borderRadius: '10px', backgroundColor: '#0d4d8f2e', color: 'rgb(255 110 25)', fontWeight: 'bold' }}>
                                            {month * 12} EGP
                                        </Typography>
                                    </Typography>
                                </Col>
                            </Row>
                        </Container>
                        <IconButton onClick={() => {
                            setOpen(false)
                            setTotal('');
                            setDownPayment('');
                            setYears('');
                            setAmount(0);
                            setMonth(0)
                        }
                        } sx={{ position: 'absolute', top: '8px', right: '8px' }}>
                            <Close fontSize='large' />
                        </IconButton>
                    </Stack>
                </Stack>
            }
        </>
    )
}

export default Calc