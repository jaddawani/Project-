import React from "react";
<<<<<<< HEAD
// import {Navbar, NavDropdown, Nav, Container} from '@material-ui/core'
import { Button, Navbar, Container, Nav, Form, FormControl, NavDropdown } from "react-bootstrap";
=======
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
>>>>>>> 5e96287b476a8ebf06c4ab82435cb7d8240c758d

///////////

<<<<<<< HEAD
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

=======
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

///////////////
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";
// core components
import styles from "../assets/jss/material-kit-react/components/headerStyle.js";

const useStyles = makeStyles(styles);

export default function Header(props) {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  React.useEffect(() => {
    if (props.changeColorOnScroll) {
      window.addEventListener("scroll", headerColorChange);
    }
    return function cleanup() {
      if (props.changeColorOnScroll) {
        window.removeEventListener("scroll", headerColorChange);
      }
    };
  });
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const headerColorChange = () => {
    const { color, changeColorOnScroll } = props;

    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > changeColorOnScroll.height-200) {
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[changeColorOnScroll.color]);

      document.getElementsByClassName("navColor")[0].style.color = "red";
      document.getElementsByClassName("navColor")[1].style.color = "red";
      document.getElementsByClassName("navColor")[2].style.color = "red";
      document.getElementsByClassName("navColor")[3].style.color = "red";
    } else {
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[changeColorOnScroll.color]);

      document.getElementsByClassName("navColor")[0].style.color =
        "transparent";
      document.getElementsByClassName("navColor")[1].style.color =
        "transparent";
      document.getElementsByClassName("navColor")[2].style.color =
        "transparent";
      document.getElementsByClassName("navColor")[3].style.color =
        "transparent";
    }
  };
  const { color, leftLinks, brand, fixed, absolute } = props;
  const appBarClasses = classNames({
    [classes.appBar]: true,
    [classes[color]]: color,
    [classes.absolute]: absolute,
    [classes.fixed]: fixed,
  });
  const brandComponent = (
    <Button style={{ marginLeft: "-68rem" }}>
      <img
        alt=""
        src="https://cdn.discordapp.com/attachments/847780444954296320/881131811588157470/Memologo-removebg-preview_1.png"
        width="180"
        height="180"
        className="d-inline-block align-top"
      />
    </Button>
  );
  return (
    <AppBar className={appBarClasses}>
      <Toolbar className={classes.container}>
        {leftLinks !== undefined ? brandComponent : null}
        <div className={classes.flex}>
          {leftLinks !== undefined ? (
            <Hidden smDown implementation="css">
              {leftLinks}
            </Hidden>
          ) : (
            brandComponent
          )}
        </div>
        <Hidden smDown implementation="css">
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
          {/* <Navbar.Collapse id="basic-navbar-nav"> */}
          <Nav className="mr-auto">
            <Nav.Link className="navColor" style={{ color: "transparent" }} href="/">
              Home
            </Nav.Link>
            <Nav.Link
              className="navColor"
              style={{ color: "transparent" }}
              href="/about-us"
            >
              Contact Us
            </Nav.Link>
            <Nav.Link
              className="navColor"
              style={{ color: "transparent" }}
              href="/contact-us"
            >
              About Us
            </Nav.Link>

            
            <NavDropdown
              className="navColor"
              style={{ color: "black"}}
              title="Birthday Party"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">
                Private Party
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Pricing</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Add-ones</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Food</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {/* <Form inline>
                                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                    <Button variant="outline-success">Search</Button>
                                    </Form> */}
        </Hidden>
        <Hidden mdUp>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
      <Hidden mdUp implementation="js">
        <Drawer
          variant="temporary"
          anchor={"right"}
          open={mobileOpen}
          classes={{
            paper: classes.drawerPaper,
          }}
          onClose={handleDrawerToggle}
        >
          <div className={classes.appResponsive}>
            {leftLinks}
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about-us">Contact Us</Nav.Link>
              <Nav.Link href="/contact-us">About Us</Nav.Link>
              <NavDropdown title="Birthday Party" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Private Party
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Pricing</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Add-ones</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Food</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </div>
        </Drawer>
      </Hidden>
    </AppBar>
  );
}
>>>>>>> 5e96287b476a8ebf06c4ab82435cb7d8240c758d

Header.defaultProp = {
  color: "white",
};

Header.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "transparent",
    "white",
    "rose",
    "dark",
  ]),

  leftLinks: PropTypes.node,
  brand: PropTypes.string,
  fixed: PropTypes.bool,
  absolute: PropTypes.bool,
  // this will cause the sidebar to change the color from
  // props.color (see above) to changeColorOnScroll.color
  // when the window.pageYOffset is heigher or equal to
  // changeColorOnScroll.height and then when it is smaller than
  // changeColorOnScroll.height change it back to
  // props.color (see above)
  changeColorOnScroll: PropTypes.shape({
    height: PropTypes.number.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "info",
      "success",
      "warning",
      "danger",
      "transparent",
      "white",
      "rose",
      "dark",
    ]).isRequired,
  }),
};
