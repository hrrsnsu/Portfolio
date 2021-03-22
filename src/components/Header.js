import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  FormControl,
  Form,
  Button,
} from "react-bootstrap";
import {Link} from 'react-scroll'



function Header() {
  return (
    <Navbar className="navbar-custom" sticky="top" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" >
          <Link className="navLinks" to="home" smooth={true} duration={1000}>Home</Link>
          <Link className="navLinks" to="projects" smooth={true} duration={1000} >Projects</Link>
          <Link className="navLinks" to="interests" smooth={true} duration={1000}>Interests</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
