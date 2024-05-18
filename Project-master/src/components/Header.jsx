import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <>
          <Navbar bg="light" data-bs-theme="light">
            <Container>
              <Navbar.Brand href="#home" className='fs-3'>INSIDER SCAN</Navbar.Brand>
              <Nav className="ms-auto" id="navbarNavAltMarkup">
                <NavLink className='nav-item nav-link' to='/'>Home</NavLink>
                <NavLink className='nav-item nav-link' to='/topcoins'>Top coins</NavLink>
                <NavLink className='nav-item nav-link' to='/pricing'>Pricing</NavLink>
                <NavLink className='nav-item nav-link' to='/login'>Log in</NavLink>
              </Nav>
            </Container>
          </Navbar>
        </>
      );
};

export default Header;