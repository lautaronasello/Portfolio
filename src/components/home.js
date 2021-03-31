import React, { Fragment } from "react";
import Title from "./title";
import Card from "./card";
import { Link } from "react-router-dom";
import aboutimg from "./img/about.jpeg";
import birreteimg from "./img/birrete.png";
import linkedinimg from "./img/linkedin.png";
import brainimg from "./img/brain.png";
import userimg from "./img/user1.png";

import "./home.css";
class Home extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="text-center pt-5 mt-1 ">
          <Title title="Lautaro Nasello" subtitle="Frontend Developer Web" />

          <div className="card-group text-center mt-5 mx-0">
            <div className="container">
              <div className="row">
                <div className="col-sm-3">
                  <div className="mx-1">
                    <Link to="/about">
                      <Card
                        img={userimg}
                        section="About"
                        text="Something about my personal life"
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="mx-1">
                    <Link to="/Knowledge">
                      <Card
                        img={brainimg}
                        section="Knowledge"
                        text="My knowledge from new tecnologies"
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="mx-1">
                    <Link to="/education">
                      <Card
                        img={birreteimg}
                        section="Education"
                        text="My experience and learnig achademys"
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="mx-1">
                    <Link to="/contact">
                      <Card
                        img={linkedinimg}
                        section="Contact"
                        text="Social Media to contact and chat me!"
                      />
                    </Link>
                  </div>
                </div>

                {/*  <Link to="/projects">
                        <Card
                        section="Projects"
                        text="Personal projects running for test"
                        />
                        </Link> */}
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Home;
