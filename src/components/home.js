import { render } from "@testing-library/react";
import React, { Fragment } from "react";
import Title from "./title";
import Card from "./card";
import { Link } from "react-router-dom";

import "./home.css";
class Home extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="text-center pt-5 mt-1">
          <Title title="Lautaro Nasello" subtitle="Frontend Developer Web" />
          <div className="card-group text-center ">
            <div className="mx-1">
              <Link to="/about">
                <Card section="About" text="Something about my personal life" />
              </Link>
            </div>
            <div className="mx-1">
              <Link to="/Knowledge">
                <Card
                  section="Knowledge"
                  text="My knowledge from new tecnologies"
                />
              </Link>
            </div>
            <div className="mx-1">
              <Link to="/education">
                <Card
                  section="Education"
                  text="My experience and learnig achademys"
                />
              </Link>
            </div>
            <div className="mx-1">
              <Link to="/contact">
                <Card
                  section="Contact"
                  text="Social Media to contact and chat me!"
                />
              </Link>
            </div>

            {/*  <Link to="/projects">
              <Card
                section="Projects"
                text="Personal projects running for test"
              />
            </Link> */}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Home;
