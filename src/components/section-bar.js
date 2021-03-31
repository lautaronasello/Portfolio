import React from "react";
import "./section-bar.css";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class SectionBar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="mx-3 mt-2">
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Lautaro Nasello</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/Knowledge">Knowledge</Nav.Link>
                <Nav.Link href="/education">Education</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>{" "}
        </div>
      </React.Fragment>
    );
  }
}

export default SectionBar;
