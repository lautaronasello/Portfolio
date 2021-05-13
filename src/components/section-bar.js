import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class SectionBar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar
          className='navbar fixed-top shadow-sm  mb-5 bg-body '
          expand='md'
        >
          <Navbar.Brand className='mx-3 my-1' href='/'>
            Lautaro Nasello
          </Navbar.Brand>
          <Navbar.Toggle className='m-2' aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto '>
              <Nav.Link className='ms-3' href='/'>
                Home
              </Nav.Link>
              <Nav.Link className='ms-3' href='/about'>
                About
              </Nav.Link>
              <Nav.Link className='ms-3' href='/Knowledge'>
                Knowledge
              </Nav.Link>
              <Nav.Link className='ms-3' href='/education'>
                Education
              </Nav.Link>
              <Nav.Link className='ms-3' href='/projects'>
                Projects
              </Nav.Link>
              <Nav.Link className='ms-3' href='/contact'>
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
