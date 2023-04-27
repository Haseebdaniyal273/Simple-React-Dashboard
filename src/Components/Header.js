import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

import "./All.css";

function CollapsibleExample() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="fw-bold"
    >
      <Container className="nnn">
        <Navbar.Brand href="#home">Zaxier-x</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav "className="mmm">
          <Nav className="me-auto text-center fw-bold navi">
          {/* <Link to="/Home" className="Navl" >Home &nbsp;</Link> */}
            <Link to="/Contact" className="Nav1" >Contact Us &nbsp;</Link>
            <Link to="/About" className="Nav1" >About Us &nbsp;</Link>
            <Link to="/Join" className="Nav1" >Join Us &nbsp;</Link>
          
          </Nav>
          <Nav>
            <Nav.Link href="#deets">On React Js</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
