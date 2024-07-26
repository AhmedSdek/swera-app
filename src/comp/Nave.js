import { Container, Nav, NavDropdown, Navbar, Offcanvas } from "react-bootstrap";
import './min.css';
import logoPhoto from './log.webp';
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase/config";
import { Button } from "@mui/material";
import { getAuth, signOut } from "firebase/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { useState } from "react";
function Navs() {
  const [value, loading, error] = useCollection(collection(db, 'admin'));
  var arr = [];
  value && value.docs.map((e) => e.data().dev.map((it) => {
    if (!arr.includes(it.district)) {
      arr.push(it.district)
    }
  }))
  return (
    <>
      <Navbar collapseOnSelect fixed="top" expand="lg" data-bs-theme="dark" id="navs">
          <Container>
            <Link aria-label="Home" to="/" style={{ width: '150px' }}>
            <img style={{ height: '42px', width: '150px' }} src={logoPhoto} alt="" />
          </Link>

          <Navbar.Toggle id="navbar-toggler" aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" style={{ justifyContent: 'center' }} >
            <Nav
            >
              <Link className="nav-link" to="/" >Home</Link>
              <NavDropdown title="Districts" id="navbarScrollingDropdown">
                {arr.map((link, index) => {
                    return (
                      <Link key={index} className="dropdown-item" to={`findhome/${link}`}>{link}</Link>
                    )
                  })}
                </NavDropdown>

              {/* <Link className="nav-link" to="/developers">Developers</Link> */}
              <Link className="nav-link" to="/sell">Sell-Rent</Link>
              <Link className="nav-link" to="/newlaunches">New Launches</Link>
              <Link className="nav-link" to='/contact'>Contact Us</Link>
              <Link className="nav-link" to="/about">About</Link>
              <Link className="nav-link" to="/maverickdeals">Maverick Deals</Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )
}
export default Navs;