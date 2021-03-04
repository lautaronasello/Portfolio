import React from "react";
import EducationCard from "./components/education-card";

class Experience extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="text-center">
          <h1>EDUCATION</h1>
        </div>
        <div className="container text-center">
          <div className="row">
            <div className="col-md-6">
              <EducationCard />
            </div>
            <div className="col-md-6">
              <EducationCard />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <EducationCard />
            </div>
            <div className="col-md-6">
              <EducationCard />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Experience;
