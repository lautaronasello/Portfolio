import { render } from "@testing-library/react";
import React from "react";
import "./section-bar.css";
import { Link } from "react-router-dom";

class SectionBar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light sticky-top shadow-sm bg-body ">
          <div className="container-fluid">
            <p className="navbar-brand py-0 mb-0" href="#">
              Lautaro Nasello
            </p>
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
                <Link to={"/"}>
                  <p className="nav-link py-0 mb-0" aria-current="page">
                    Home
                  </p>
                </Link>
                <Link to={"/about"}>
                  <p className="nav-link py-0 mb-0">About</p>
                </Link>
                <Link to={"/knowledge"}>
                  <p className="nav-link py-0 mb-0">Knowledge</p>
                </Link>
                <Link to={"/education"}>
                  <p className="nav-link py-0 mb-0">Education</p>
                </Link>
                <Link to={"/projects"}>
                  <p className="nav-link py-0 mb-0">Projects</p>
                </Link>
                <Link to={"/contact"}>
                  <p
                    className="nav-link py-0 mb-0 "
                    href="#"
                    tabIndex="-1"
                    aria-disabled="true"
                  >
                    Contact
                  </p>
                </Link>
              </div>
            </div>
            <div className="navbar-nav right">
              <p className="nav-link py-0 mb-0" href="#">
                Switch Languaje
              </p>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default SectionBar;
