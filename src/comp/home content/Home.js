import { Button, Col, Container, Row } from 'react-bootstrap';
import video from './Coldwell Banker _ Preferred Real Estate Consultants in Egypt.mp4';
import img from './egyptheader.jpg'
import Slider from './slider/Slider';
import Projucts from './projucts/Projucts';
import { Fade } from 'react-awesome-reveal';
import './home.css';
import NewLaunches from '../New Launches/NewLaunches';
import HomeForm from './Home Form/HomeForm';

function Home(){

    return(
        <>
            {/* <Fade direction='left' > */}
            <header className='home-header'>
            <Container fluid>
                    {/* <video src={video} width="100%" muted autoPlay loop></video> */}
                        <Row className='header-main' style={{ textAlign: 'center' }}>
                        <h1 style={{ color: 'white' }}>
                            Let Us Help You Make The Move
                        </h1>
                        {/* <div style={{ padding: '0' }}>
                                <Col className='btn-d' style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                            <Button style={{borderRadius:'20px 0 0 20px', marginRight:'20px',fontWeight:'700'}}>Get a Consultant</Button>
                            <Button style={{borderRadius:'0 20px 20px 0',fontWeight:'700'}}>Buy a Home</Button>
                                </Col>
                            </div> */}
                    </Row>
            </Container>
            </header>
            <Slider />
            <NewLaunches />
            <Projucts />
            <hr />
            <HomeForm />
            {/* </Fade> */}
            {/* <details>
                <summary>
                    move
                </summary>
                <p>
                    loremffffffffffffffffffffffffffff
                </p>
            </details> */}
        </> 
    )
}
export default Home;