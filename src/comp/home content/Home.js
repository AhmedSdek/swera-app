import Slider from './slider/Slider';
import './home.css';
import NewLaunches from '../New Launches/NewLaunches';
import HomeForm from './Home Form/HomeForm';
import SahelMap from './sahel map/SahelMap';
import Calc from './Calc/Calc';
import HomeDeals from '../deals/HomeDeals';
import { Box, Button, Stack, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from '@mui/icons-material';
import HomePup from './HomePup/HomePup';
import im from './im.png'
import im2 from './im2.jpg'
import CityscapeHome from './cityscape/CityscapeHome';
function Home() {
    const [pup, setPup] = useState(0);
    useEffect(() => {
        setPup(1)
    }, []);
    // const [serch, setSerch] = useState('')
    // function cap(string) {
    //     return string.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    // }
    const nav = useNavigate()
    return (
        <div >
            <Box component='header' sx={{ position: 'relative', backgroundColor: 'white', backgroundImage: { xs: `url(${im2})`, md: `url(${im})` } }} className='home-header'>
                <div className='header-main' style={{ textAlign: 'start', width: '40%', margin: '35px auto 0 ' }}>
                    <h1 className='hed1' style={{ color: 'white', lineHeight: '1.8', width: 'fit-content' }}>
                        <mark style={{ backgroundColor: 'rgb(255 145 77 / 87%)', borderRadius: '6px', fontWeight: 'bold', color: '#1e4164', }}>
                            Let us
                        </mark>
                    </h1>
                    <h2 className='hed2' style={{ color: 'white', fontWeight: 'bold', margin: '0', fontSize: '40px' }}>
                        Help You To Make
                    </h2>
                    <h2 className='hed3' style={{ textAlign: 'end', fontWeight: 'bold', color: 'white', margin: '5px 0  0 0', fontSize: '40px' }}>
                        The Move
                    </h2>
                    {/* <Stack component='form' sx={{ flexDirection: 'column', width: '100%', gap: 1, alignItems: 'center', paddingTop: '10px', position: 'relative' }} onSubmit={(e) => {
                        e.preventDefault();
                        nav(`/developers/${cap(serch)}`)
                    }}>
                        <TextField color="warning" className='header-search' sx={{ backgroundColor: 'white', width: '100%', borderRadius: '10px' }} id="outlined-search" placeholder='Real estate Developer' type="search" onChange={(e) => setSerch(e.target.value)} />
                        <Search sx={{ position: 'absolute', right: '10px', top: '27px' }} />
                        <Button type='submit' variant='contained' sx={{ width: '130px', backgroundColor: '#ff914d' }}>
                            Search
                        </Button>
                    </Stack> */}
                </div>
            </Box>
            <SahelMap />
            <CityscapeHome />
            <NewLaunches />
            <Slider />
            <HomeDeals />
            <Stack sx={{ marginBottom: '15px' }}>
                <HomeForm hedText='Need Expert Advice ?' text2='Fill out the form and one of our property consultants will contact you.' Alert='Thank you. I will get back to you as soon as possible.' />
            </Stack>
            <Calc />
            {/* <HomePup pup={pup} setPup={setPup} /> */}
        </div>
    )
}
export default Home;