import { render } from "@testing-library/react";
import React from "react";
import "./section-bar.css";

class SectionBar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Lautaro Nasello
            </a>
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
              <div className="navbar-nav ">
                <a className="nav-link " aria-current="page" href="#">
                  Home
                </a>
                <a className="nav-link" href="#">
                  About
                </a>
                <a className="nav-link" href="#">
                  Knowledge
                </a>
                <a className="nav-link" href="#">
                  Experience
                </a>
                <a className="nav-link" href="#">
                  Projects
                </a>
                <a
                  className="nav-link "
                  href="#"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Contact
                </a>
              </div>
            </div>
            <div className="navbar-nav right">
              <a className="nav-link" href="#">
                Switch Languaje
              </a>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default SectionBar;
