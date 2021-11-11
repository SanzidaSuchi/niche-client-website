import React from 'react';
import logo from "./../../../images/logo.png";
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

import HeaderBG from "./../../../images/header-bg.png";
import useAuth from '../../../hooks/useAuth';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const  {
    allContext,
   } = useAuth();
    const {user, logOut} = allContext;
    const { displayName, photoURL, email } = user;
    const active = {
      color: "#ff136f",
      borderBottom: "2px solid #ff136f",
    };
    const navStyle = {
      textDecoration: "none",
      margin: "0 8px",
      color: "white",
      fontSize: "17px",
      fontWeight: "bold",
      textTransform: "Uppercase",
    };
  return (
    <div>
      <Navbar style={{ background: `url(${HeaderBG})`}} expand="lg">
        <Container>
          <Navbar.Brand as={NavLink} className="text-white" to="/home">
            <img width="160px" src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto  align-items-center">
              <Nav.Link as={NavLink} to="/home" className="text-white"
              style={navStyle}
              activeStyle={active}>
                Home
              </Nav.Link>

              <Nav.Link as={NavLink} to="/addServices" className="text-white"
              style={navStyle}
              activeStyle={active}>
                Add NewService
              </Nav.Link>
              <Nav.Link as={NavLink} to="/myOrder" className="text-white"
              style={navStyle}
              activeStyle={active}>
                My Order
              </Nav.Link>
              <Nav.Link as={NavLink} to="/manageAll" className="text-white"
              style={navStyle}
              activeStyle={active}>
                Manage All
              </Nav.Link>

              <Nav.Link as={NavLink} to="/contact" className="text-white"
              style={navStyle}
              activeStyle={active}>
                Contact
              </Nav.Link>
              <Nav.Link as={NavLink} to="/services" className="text-white"
              style={navStyle}
              activeStyle={active}>
                Services
              </Nav.Link>

              {!email ? (
                <>
                  <Nav.Link as={NavLink} to="/signup" className="text-white"
                  style={navStyle}
                  activeStyle={active}>
                    Sign Up
                  </Nav.Link>

                  <Nav.Link className="text-white" as={NavLink} to="/login"
                  style={navStyle}
                  activeStyle={active}>
                    Log In
                  </Nav.Link>
                </>
              ) : (
                <NavDropdown
                  title={
                    <img
                      style={{
                        width: "45px",
                        borderRadius: "50%",
                      }}
                      src={photoURL}
                      alt=""
                    />
                  }
                >
                  <div className="text-center">
                    <h6>{displayName}</h6>
                    <p className="m-0">{email}</p>
                    <button onClick={logOut} className="btn btn-primary">
                      Sign Out
                    </button>
                  </div>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
};

export default Header;