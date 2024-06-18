import { Container, Nav, NavDropdown, Navbar} from "react-bootstrap";
import './min.css';
import logoPhoto from './maverick logo M.png';
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
        <Navbar id="navs" collapseOnSelect fixed="top" expand="lg" >
          <Container>
            <Link to="/" style={{ width: '150px' }}>
              <img style={{ width: '100%' }} src={logoPhoto} alt="" />
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto">
                <Link className="nav-link" to="/">Home</Link>

                <NavDropdown title="Find a Home" id="basic-nav-dropdown">
                  <Link className="dropdown-item" to="/findhome/6 October">6 October</Link>
                  <Link className="dropdown-item" to="/findhome/New Cairo">New Cairo</Link>
                </NavDropdown>
                {/* <Link className="nav-link" to="/developers">Developers</Link> */}
                <Nav.Link href="#contact">Contact Us</Nav.Link>
                <Link className="nav-link" to="/sell">Sell-Rent</Link>
                <Link className="nav-link" to="/maverickdeals">Maverick Deals</Link>
                {!user ?
                  <>
                    <Link className="nav-link" to="/signup">Register</Link>
                    <Link className="nav-link" to="/signin">Log in</Link>
                  </>
                :
                  <>
                    <div className="nav-link" >
                      <Button sx={{ lineHeight: '0', padding: '0', fontWeight: 'bold' }} onClick={() => {
                        const auth = getAuth();
                        signOut(auth).then(() => {
                          // Sign-out successful.
                        }).catch((error) => {
                          // An error happened.
                        });
                        nav('/')
                      }} variant="text" color="error">
                        Log Out
                      </Button>
                    </div>
                  {adminData.includes(user.uid) &&
                    <Link className="nav-link" to='/dashboard'>dash</Link>
                  }
                  </>
                }
              </Nav>
              {/* <Nav className="ms-auto">
            <Nav.Link href="https://bit.ly/3pvjCS2">Request a Call ... <i className="fa-solid fa-phone"></i></Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )
}
export default Navs;