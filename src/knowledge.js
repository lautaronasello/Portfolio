import React from "react";
import { Fragment } from "react";
import Title from "./components/title";
import Card from "./components/card";

class Knowledge extends React.Component {
  render() {
    return (
      <Fragment>
        <Title title="Knowledge" subtitle="These are some of my skills" />
        <div className="card-group text-center">
          <div className="container">
            <div className="row">
              <div className="col-md-4 my-3">
                <Card
                  section="HTML"
                  text="The standar HTML5 markup languaje. I have Medium-high level to be able to build a large number of web pages."
                />
              </div>
              <div className="col-md-4 my-3">
                <Card
                  section="CSS"
                  text="The graphic design language in cascading to define and create a web page."
                />
              </div>
              <div className="col-md-4 my-3">
                <Card
                  section="Bootstrap"
                  text="CSS Library for responsive web design. I have a Medium-High level in this too."
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 my-3">
                <Card
                  section="Firebase"
                  text="Only know how to use for deploying and RealTime database for web apps but my intention is to keep learning more."
                />
              </div>
              <div className="col-md-4 my-3">
                <Card
                  section="JavaScript"
                  text="This is one of my favorites. This language add the functionality to the web page. Requires logic and lateral think."
                />
              </div>
              <div className="col-md-4 my-3">
                <Card
                  section="React"
                  text="The JavaScript Framework created by Facebook. Im constantly learnig from this framework. i currently have a medium level on this one."
                />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <h1 className="margin col-md-12 center ">Languages</h1>
            </div>
            <div className="row ">
              <div className="col-md-6 mb-3 ">
                <Card
                  section="Spanish"
                  text="Native language. I Speak it since I was born."
                />
              </div>
              <div className="col-md-6 mb-3  ">
                <Card
                  section="English"
                  text="Secondary language, I know 60% and keep learning."
                />
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default Knowledge;
