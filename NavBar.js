import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

function NavBar({showcart}) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
      <LinkContainer to="/"><Navbar.Brand href="/">React-Bootstrap</Navbar.Brand></LinkContainer>
        
        {/* <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{ float: "right" }}>
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
        </Navbar.Collapse> */}
        {showcart&&<Link to="/cart"><h1>Cart</h1></Link>}
      </Container>
    </Navbar>
  );
}

export default NavBar;
