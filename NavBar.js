import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function NavBar({showcart}) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={{boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)"}}>
      <Container>
      <LinkContainer to="/"><Navbar.Brand href="/"><h1 style={{color:"red"}}>Shopping Cart</h1></Navbar.Brand></LinkContainer>
        
        {/* <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{ float: "right" }}>
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
        </Navbar.Collapse> */}
        {showcart&&<Link to="/cart" style={{textDecoration:"none"}}><h2 ><ShoppingCartIcon fontSize="large"/>Cart</h2></Link>}
      </Container>
    </Navbar>
  );
}

export default NavBar;
