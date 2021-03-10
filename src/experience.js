import React from "react";
import EducationCard from "./components/education-card";

class Experience extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-3">
          <div className="text-center mb-3">
            <h1>Education</h1>
          </div>
          <div className="container text-center">
            <div className="row mb-3">
              <div className="col-md-6 my-3">
                <EducationCard
                  img="https://via.placeholder.com/100"
                  FirstSubtitle={"Escuela Dev Rock"}
                  CardTitle={"HTML, CSS, JavaScript, React and Firebase"}
                  SecSubtitle={"Finished all in 2020"}
                  PpalText={
                    "Whit this academy I learn basics of HTML,CSS,JavaScript,React and Firebase. The basics for a Fullstack developer Web."
                  }
                  BtnText={"View Certificated"}
                />
              </div>
              <div className="col-md-6 my-3">
                <EducationCard
                  img="https://via.placeholder.com/100"
                  FirstSubtitle={"Educacion it - Alumni"}
                  CardTitle={"Full Stack Developer with JAVA"}
                  SecSubtitle={"Finished in 2021"}
                  PpalText={
                    "This course gave me the tools and knowledge basics for web development based on JAVA technologies."
                  }
                  BtnText={"View Certificated"}
                />{" "}
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12 my-3">
                <EducationCard
                  img="https://via.placeholder.com/100"
                  FirstSubtitle={"Colegio Parroquial San Francisco de Asís"}
                  CardTitle={"Bachelor's degree in Economy"}
                  SecSubtitle={"Finished in 2015"}
                  PpalText={
                    "This is my high school, in which I've learnt all I needed to know to become what I am today."
                  }
                  BtnText={"View Certificated"}
                />{" "}
              </div>
              <div className="col-md-6"></div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Experience;
