import { Container, Nav, NavDropdown, Navbar} from "react-bootstrap";
import './min.css';
import logoPhoto from './logo 2.png';
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";
import { Button } from "@mui/material";
import { getAuth, signOut } from "firebase/auth";

function Navs(){
  const [user] = useAuthState(auth);
  const adminData = ['arB4bTAtCiaMCBprrnOTRz6YbmT2', 'YZia9oRhhzdNFG1JOXteZOpcdw83']
  const nav = useNavigate();
    return(
        <>
        <Navbar id="navs" collapseOnSelect fixed="top" expand="xlg" variant="dark">
      <Container>
            <Link to="/" style={{ width: '150px' }}>
              <img style={{ width: '100%' }} src={logoPhoto} alt="" />
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Link className="nav-link" to="/">Home</Link>
            <NavDropdown title="Find a Home" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">North Coast</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Ain Sokhna
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">6 October</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">New Cairo</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5"> New Capital </NavDropdown.Item>

            </NavDropdown>
                <Link className="nav-link" to="/developers">Developers</Link>
                <Nav.Link href="#contact">Contact Us</Nav.Link>
                <Link className="nav-link" to="/sell">Sale - Rent your unit</Link>
                <Link className="nav-link" to="/maverickdeals">MAVERICK Deals</Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="https://bit.ly/3pvjCS2">Request a Call ... <i className="fa-solid fa-phone"></i></Nav.Link>
          </Nav>
              {!user ? <Nav className="ms-auto">
                <Link className="nav-link" to="/signup">Register</Link>
                <Link className="nav-link" to="/signin">Log in</Link>
              </Nav>
                :
                <Nav className="ms-auto">
                  <Button onClick={() => {
                    const auth = getAuth();
                    signOut(auth).then(() => {
                      // Sign-out successful.
                    }).catch((error) => {
                      // An error happened.
                    });
                    nav('/')
                  }} variant="contained" color="error">
                    Log Out
                  </Button>
                  {adminData.includes(user.uid) &&
                    <Link className="nav-link" to='/dashboard'>dash</Link>
                  }
                </Nav>
              }
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )
}
export default Navs;