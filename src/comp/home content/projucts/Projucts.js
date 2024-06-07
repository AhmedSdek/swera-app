import { Col, Container, Row } from "react-bootstrap";
import pic1 from './1.jpg';
import pic2 from './2.jpg';
import pic3 from './3.jpg';
import './projucts.css';

function Projucts(){
    return(
        <>
        <section className="projucts-section">
            <Container style={{height:'100%'}}>
                <h2 className="projucts-title">ReSale</h2>
                <Row style={{height:'100%'}}>
                    <Col className="photo-div" >
                        <div className="first-photo-div" style={{width:'100%',height:'100%'}}>
                            <img style={{width:'100%',height:'100%',borderRadius:' 30px 0 0 30px '}} src={pic3} alt=""></img>
                        </div>
                        <div className="text-cont" style={{borderRadius:' 30px 0 0 30px '}}>
                                <div>
                                <span>
                                Apartment for sale in galleria Moon valley 
                                </span>
                                <h4>Fifth settlement  
                                </h4>
                                </div>
                                <div className="flex-div" style={{display:'flex',position:'relative'}}>
                                    <div className="first-p">
                                    <p >Total price : 3,650,000
                                    <br/> <strong> dp 2,220,000</strong><br></br><strong>remaining rest till feb 2028</strong></p>
                                    </div>
                                    <div className="second-p">
                                    <p> Prime Location
                                        Bua 135 ,
                                        2 Bedrooms ,
                                        2 Bathrooms ,
                                        Reception ,
                                        Ready to move , 
                                        fully finished 
                                    </p>
                                    </div>
                                </div>
                            </div>
                    </Col>
                    <Col className="photo-div" >
                        <div style={{width:'100%',height:'100%'}}>
                            <img style={{width:'100%',height:'100%'}} src={pic1} alt=""></img>
                        </div>
                        <div className="text-cont">
                                <div>
                                <span>
                                Apartment for sale in hyde park
                                </span>
                                <h4>Park corner</h4>
                                </div>
                                <div className="flex-div" style={{display:'flex',position:'relative'}}>
                                    <div className="first-p">
                                    <p >Total : 4,607,000 <br/> <strong> Dp : 3,112,000</strong><br></br><strong>Remaining :1,495,000 <br></br>till apr 2030</strong></p>
                                    </div>
                                    <div className="second-p">
                                    <p> Bua145
                                    3bedrooms ,
                                    2 bathrooms ,
                                    Park corner .
                                    </p>
                                    </div>
                                </div>
                            </div>
                    </Col>
                    <Col className="photo-div" >
                        <div style={{width:'100%',height:'100%'}}>
                            <img style={{width:'100%',height:'100%',borderRadius:'0 30px 30px 0'}} src={pic2} alt=""></img>
                        </div>
                        <div className="text-cont" style={{borderRadius:'0 30px 30px 0'}}>
                                <div>
                                <span>
                                apartment For Sale Fifth square - El Marassem 
                                </span>
                                <h4>New Cairo</h4>
                                </div>
                                <div className="flex-div" style={{display:'flex',position:'relative'}}>
                                    <div className="first-p">
                                    <p >Total price 5,350,000 <br/> <strong> Down payment : 4.5 millions </strong><br/><strong>Remaining installments: 1,052,500 <br />till 12 - 2025</strong></p>
                                    </div>
                                    <div className="second-p">
                                    <p> Prime Location
                                    Ready to move ,
                                    Bua 160 m ,
                                    3 bedrooms ,
                                    3 bathrooms ,
                                    fully finished,
                                    </p>
                                    </div>
                                </div>
                            </div>
                    </Col>
                </Row>
            </Container>
        </section>
        </>
    )
}
export default Projucts;