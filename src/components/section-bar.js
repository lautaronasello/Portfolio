import React from "react";
import "./section-bar.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class SectionBar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar
          className="navbar fixed-top shadow-sm p-3 mb-5 bg-body "
          expand="md"
        >
          <Navbar.Brand className="mx-3" href="/">
            Lautaro Nasello
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto ">
              <Nav.Link className="mx-2 my-1" href="/">
                Home
              </Nav.Link>
              <Nav.Link className="mx-2 my-1" href="/about">
                About
              </Nav.Link>
              <Nav.Link className="mx-2 my-1" href="/Knowledge">
                Knowledge
              </Nav.Link>
              <Nav.Link className="mx-2 my-1" href="/education">
                Education
              </Nav.Link>
              <Nav.Link className="mx-2 my-1" href="/contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default SectionBar;
