import React from "react";
import EducationCard from "./components/education-card";

class Projects extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-3">
          <div className="text-center mb-3">
            <h1>PROJECTS</h1>
          </div>
          <div className="container text-center">
            <div className="row mb-3">
              <div className="col-md-6 ">
                <EducationCard
                  FirstSubtitle={"Escuela Dev Rock"}
                  CardTitle={"HTML,CSS,JavaScript,React,Firebase"}
                  SecSubtitle={"Finished all in 2020"}
                  PpalText={
                    "whit this academy i learn basics of HTML,CSS,JavaScript,React and Firebase. The basics for a fullstack developer Web"
                  }
                  BtnText={"View Certificated"}
                />
              </div>
              <div className="col-md-6 ">
                <EducationCard
                  FirstSubtitle={"Escuela Dev Rock"}
                  CardTitle={"HTML,CSS,JavaScript,React,Firebase"}
                  SecSubtitle={"Finished all in 2020"}
                  PpalText={
                    "whit this academy i learn basics of HTML,CSS,JavaScript,React and Firebase. The basics for a fullstack developer Web"
                  }
                  BtnText={"View Certificated"}
                />{" "}
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-6">
                <EducationCard
                  FirstSubtitle={"Escuela Dev Rock"}
                  CardTitle={"HTML,CSS,JavaScript,React,Firebase"}
                  SecSubtitle={"Finished all in 2020"}
                  PpalText={
                    "whit this academy i learn basics of HTML,CSS,JavaScript,React and Firebase. The basics for a fullstack developer Web"
                  }
                  BtnText={"View Certificated"}
                />{" "}
              </div>
              <div className="col-md-6">
                <EducationCard
                  FirstSubtitle={"Escuela Dev Rock"}
                  CardTitle={"HTML,CSS,JavaScript,React,Firebase"}
                  SecSubtitle={"Finished all in 2020"}
                  PpalText={
                    "whit this academy i learn basics of HTML,CSS,JavaScript,React and Firebase. The basics for a fullstack developer Web"
                  }
                  BtnText={"View Certificated"}
                />{" "}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Projects;
