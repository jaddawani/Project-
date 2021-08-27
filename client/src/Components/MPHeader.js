import React from 'react'
// import {Navbar, NavDropdown, Nav, Container} from '@material-ui/core'
import {Button, Navbar , Container, Nav, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const MPHeader = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="navbar navbar-light bg-warning" variant="dark">
  <Container>
  <img
          alt=""
          src="https://media.discordapp.net/attachments/847780444954296320/880729396426711060/memorable.PNG"
          width="200"
          height="150"
          className="d-inline-block align-top"
        />{' '}
  {/* <Navbar.Brand href="#home">Memorable</Navbar.Brand> */}

  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      {/* <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link> */}
      <NavDropdown title="Birthday Party" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Private Party</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Pricing</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Add-ones</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">Food</NavDropdown.Item>
        
      </NavDropdown>
      
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}

export default MPHeader
