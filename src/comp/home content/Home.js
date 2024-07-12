// import { Button, Col, Container, Row } from 'react-bootstrap';
// import video from './Coldwell Banker _ Preferred Real Estate Consultants in Egypt.mp4';
// import img from './egyptheader.webp'
import Slider from './slider/Slider';
// import Projucts from './projucts/Projucts';
// import { Fade } from 'react-awesome-reveal';
import './home.css';
import NewLaunches from '../New Launches/NewLaunches';
import HomeForm from './Home Form/HomeForm';
import SahelMap from './sahel map/SahelMap';
import Calc from './Calc/Calc';
import HomeDeals from '../deals/HomeDeals';
import { Button, Stack, TextField } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Home() {
    const [serch, setSerch] = useState('')
    function cap(string) {
        return string.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    }
    const nav = useNavigate()
    return(
        <>
            <header style={{ position: 'relative', backgroundColor: 'white' }} className='home-header'>
                <div className='header-main' style={{ textAlign: 'start', width: '40%', margin: '0 auto ' }}>
                    <h1 className='hed1' style={{ color: 'white', lineHeight: '1.8', width: 'fit-content' }}>
                        <mark style={{ backgroundColor: '#ff6e19', borderRadius: '6px', fontWeight: 'bold', color: '#1e4164', }}>
                            Let Us
                        </mark>
                        </h1>
                    <h2 className='hed2' style={{ color: 'white', fontWeight: 'bold', margin: '0', fontSize: '40px' }}>
                        Help You To Make
                    </h2>
                    <h2 className='hed3' style={{ textAlign: 'end', fontWeight: 'bold', color: 'white', margin: '5px 0  0 0', fontSize: '40px' }}>
                        The Move
                    </h2>
                    <Stack component='form' sx={{ flexDirection: 'row' }} onSubmit={(e) => {
                        e.preventDefault();
                        nav(`/developers/${cap(serch)}`)
                    }}>
                        <TextField sx={{ backgroundColor: 'white' }} id="outlined-search" placeholder='Dev' type="search" onChange={(e) => setSerch(e.target.value)} />
                        <Button type='submit' variant='contained'>
                            Search
                        </Button>
                    </Stack>
                </div>
            </header>
            <SahelMap />
            <NewLaunches />
            <Slider />
            {/* <Projucts /> */}
            <HomeDeals />
            <HomeForm />
            <Calc />
        </> 
    )
}
export default Home;