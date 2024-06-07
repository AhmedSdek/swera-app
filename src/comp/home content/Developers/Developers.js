import { Col, Container, Row } from "react-bootstrap";
import './developers.css';
import { Link} from "react-router-dom";
import { data } from "../../Data";
function Developers(){
    return(
        <>
        <div style={{ padding:'80px 0', textAlign:'center'}}>
        <h1 className="developers-title">DEVELOPERS FULL LIST</h1>
        <Container>
            <Row>
                {data.map((product) => {
                    return(
                            <Col key={product.id} className="col-xl-2 col-sm-3 col-6">
                                <Link className="logo hoveredLogo d-flex align-items-center flex-column p-4 inner" to={`/product/${product.id}`}>
                                    <img className="img-fluid img shadow-filter rounded-circle" src={product.image} alt="Mountain View"></img>
                                </Link>
                            </Col>
                    )
                })}
            </Row>
        </Container>
        </div>
        </>
    )
}
export default Developers;