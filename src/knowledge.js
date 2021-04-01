import React from "react";
import { Fragment } from "react";
import Title from "./components/title";
import Card from "./components/card";
import htmlimg from "./components/img/html5.png";
import cssimg from "./components/img/css.png";
import bootstrapimg from "./components/img/bootstrap.png";
import firebaseimg from "./components/img/firebase.png";
import javascriptimg from "./components/img/javascript.webp";
import reactimg from "./components/img/react.png";
import españaimg from "./components/img/españa.png";
import usaimg from "./components/img/usa.png";

class Knowledge extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="position-static">
          <br />
          <Title
            className="pt-5"
            title="Knowledge"
            subtitle="These are some of my skills"
          />

          <div className="card-group text-center">
            <div className="container">
              <div className="row">
                <div className="col-md-4 my-3">
                  <Card
                    img={htmlimg}
                    section="HTML"
                    text="The standar HTML5 markup languaje. I have Medium-high level to be able to build a large number of web pages."
                  />
                </div>
                <div className="col-md-4 my-3">
                  <Card
                    img={cssimg}
                    section="CSS"
                    text="The graphic design language in cascading to define and create a web page."
                  />
                </div>
                <div className="col-md-4 my-3">
                  <Card
                    img={bootstrapimg}
                    section="Bootstrap"
                    text="CSS Library for responsive web design. I have a Medium-High level in this too."
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 my-3">
                  <Card
                    img={firebaseimg}
                    section="Firebase"
                    text="Only know how to use for deploying and RealTime database for web apps but my intention is to keep learning more."
                  />
                </div>
                <div className="col-md-4 my-3">
                  <Card
                    img={javascriptimg}
                    section="JavaScript"
                    text="This is one of my favorites. This language add the functionality to the web page. Requires logic and lateral think."
                  />
                </div>
                <div className="col-md-4 my-3">
                  <Card
                    img={reactimg}
                    section="React"
                    text="The JavaScript Framework created by Facebook. Im constantly learnig from this framework. i currently have a medium level on this one."
                  />
                </div>
              </div>
            </div>
            <div className="container my-5">
              <div className="row">
                <h1 className="margin col-md-12 center ">Languages</h1>
              </div>
              <div className="row">
                <div className="col-md-6 my-3">
                  <Card
                    img={españaimg}
                    section="Spanish"
                    text="Native language. I Speak it since I was born."
                  />
                </div>
                <div className="col-md-6 my-3">
                  <Card
                    img={usaimg}
                    section="English"
                    text="Secondary language, I know 60% and keep learning."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default Knowledge;
