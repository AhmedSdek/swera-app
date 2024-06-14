import { Button, Col, Container, Row } from 'react-bootstrap';
import video from './Coldwell Banker _ Preferred Real Estate Consultants in Egypt.mp4';
import Slider from './slider/Slider';
import Projucts from './projucts/Projucts';
import { Fade } from 'react-awesome-reveal';
import './home.css';

function Home(){

    return(
        <>
            {/* <Fade direction='left' > */}
        <header>
            <Container fluid>
                <video src={video} width="100%" muted autoPlay loop></video>
                        <Row className='header-main' style={{ textAlign: 'center' }}>
                        <h2>
                        let us help you make the move
                        </h2>
                            <div style={{ padding: '0' }}>

                                <Col className='btn-d' style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                            <Button style={{borderRadius:'20px 0 0 20px', marginRight:'20px',fontWeight:'700'}}>Get a Consultant</Button>
                            <Button style={{borderRadius:'0 20px 20px 0',fontWeight:'700'}}>Buy a Home</Button>
                                </Col>
                            </div>
                    </Row>
            </Container>
        </header>
        <Slider />

        <Projucts />
            {/* </Fade> */}

        </> 
    )
}
export default Home;