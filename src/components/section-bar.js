import React from "react";
import "./section-bar.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class SectionBar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar
          className="navbar fixed-top shadow-sm  mb-5 bg-body "
          expand="md"
        >
          <Navbar.Brand className="mx-3 my-1" href="/portfolio">
            Lautaro Nasello
          </Navbar.Brand>
          <Navbar.Toggle className="m-2" aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto ">
              <Nav.Link className="ms-3" href="/portfolio">
                Home
              </Nav.Link>
              <Nav.Link className="ms-3" href="/portfolio/about">
                About
              </Nav.Link>
              <Nav.Link className="ms-3" href="/portfolio/Knowledge">
                Knowledge
              </Nav.Link>
              <Nav.Link className="ms-3" href="/portfolio/education">
                Education
              </Nav.Link>
              <Nav.Link className="ms-3" href="/portfolio/contact">
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
