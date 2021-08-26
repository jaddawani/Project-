
import React from "react";
import {Button, Navbar , Container, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const Header = () => {
  return (
    <div>
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="https://www.freepngimg.com/thumb/adidas/2-2-adidas-logo-png-image.png"
          width="100"
          height="100"
          className="d-inline-block align-top"
        />{' '}
      React Bootstrap
      
      </Navbar.Brand>
    </Container>
  </Navbar>
    </div>
  );
};

export default Header;
