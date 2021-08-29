import React from "react";
// import {Navbar, NavDropdown, Nav, Container} from '@material-ui/core'
import { Button, Navbar, Container, Nav, Form, FormControl, NavDropdown } from "react-bootstrap";


import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/MPHeaderStyle.css"
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

const MPHeader = () => {
    return (

        <div>
            <div className="row">
                <div >
                    <Router>
                        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                            <img
                                alt=""
                                src="https://media.discordapp.net/attachments/847780444954296320/880846660450795530/memorable-modified.png"
                                width="150"
                                height="150"
                                className="d-inline-block align-top"
                            />{' '}
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                    <Nav.Link href="/">Home</Nav.Link>
                                    <Nav.Link href="/about-us">Contact Us</Nav.Link>
                                    <Nav.Link href="/contact-us">About Us</Nav.Link>
                                    <NavDropdown title="Birthday Party" id="collasible-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Private Party</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Pricing</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Add-ones</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.4">Food</NavDropdown.Item>

                                    </NavDropdown>
                                </Nav>
                                {/* <Form inline>
                                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                    <Button variant="outline-success">Search</Button>
                                    </Form> */}
                            </Navbar.Collapse>
                        </Navbar>
                        {/* <br />
                            <Switch>
                                <Route exact path="/">
                                    <Home />
                                </Route>
                                <Route path="/about-us">
                                    <AboutUs />
                                </Route>
                                <Route path="/contact-us">
                                    <ContactUs />
                                </Route>
                            </Switch> */}
                    </Router>
                </div>
            </div>
        </div>



    )
}

export default MPHeader;
