import { useParams } from "react-router-dom";
import { data } from "./Data";
import './home content/Developers/developers.css';
import { Container } from "react-bootstrap";
import './min.css';
function Details(){
    let {productId} = useParams();
    // eslint-disable-next-line eqeqeq
    const product = data.find((pro) => pro.id == productId);
    // console.log(product);
    return(
    <>
        <div className="details-div">
            <div className="text-photo">
                <h1>
                MAVERICK DEVELOPERS 
                </h1>
            </div>
            <Container>
                <div className="data-div">
                    <div className="company-photo">
                        <img src={product.image} alt={product.name}></img>
                    </div>
                    <div className="company-data">
                        <h2>{product.name}</h2>
                        <p><strong>{product.name}</strong>{product.des1}</p>
                        <p>{product.des2}</p>
                        <p>{product.des3}</p>
                        <p><strong>{product.name}</strong>{product.des4}</p>
                        
                    </div>
                </div>
            </Container>
        </div>
    </>
    )
}
export default Details;