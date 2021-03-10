import { Fragment } from "react";
import React from "react";
import "./about.css";

class About extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="text-center padding-top container">
          <div className="row">
            <div className="col-md-12 ">
              <img
                src="https://via.placeholder.com/300"
                className="img-thumbnail rounded mx-auto d-block img-abt"
                alt="About"
              ></img>
              <div className="side-margin">
                <hr />
                <h1>WHO AM I?</h1>
                <h5>
                  Hey there! My name is Lautaro, and I'm a web developer. I'm 23
                  years old, and I lived in Córdoba, Argentina. Apart from
                  coding, I'm a student of Psychology in UNC, play guitar in my
                  free times and also I keep learning new technologies because I
                  love create new things.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default About;
