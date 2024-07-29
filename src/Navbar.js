import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink as RouterNavLink } from "react-router-dom";
import "./Navbar.css";

const CustomNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="custom-navbar">
      <Navbar.Brand className=" custom-logo">
        Bike Bazar
        {/* <img src={bikebazar} className="navbar-logo" alt="BikeBazar" /> */}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="custom-collapse">
        <Nav className="ms-auto">
          {/* <Nav.Link className="nav-button fs-6 px-3 custom-header" href="/Home"> */}
          <Nav.Link
            as={RouterNavLink}
            to="/"
            exact
            className="nav-button fs-6 px-3 custom-header"
            href="/"
          >
            Home
          </Nav.Link>
          <Nav.Link
            as={RouterNavLink}
            to="/feature"
            className="nav-button fs-6 px-3 custom-header"
            activeClassName="active"
          >
            Feature
          </Nav.Link>
          <Nav.Link
            as={RouterNavLink}
            to="/shop"
            className="nav-button fs-6 px-3 custom-header"
            activeClassName="active"
          >
            Shop
          </Nav.Link>
          <Nav.Link
            as={RouterNavLink}
            to="/contact"
            className="nav-button fs-6 px-3 custom-header"
            activeClassName="active"
          >
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
