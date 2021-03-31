import React from "react";
import EducationCard from "./components/education-card";
import escuelalogo from "./components/escueladevrock.png";
import educacionlogo from "./components/logo-educacionit.png";
import franciscologo from "./components/colegio.JPG";
import "./experience.css";

class Experience extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="position-static">
          <div className="text-center my-3 position-absolute top-15 start-50 translate-middle-x">
            <h1>Education</h1>
          </div>
          <div className="container text-center">
            <div className="row mb-3">
              <div className="col-md-4 my-3 exp-med position-absolute top-55 start-0 translate-middle-y">
                <EducationCard
                  img={escuelalogo}
                  FirstSubtitle={"Escuela Dev Rock"}
                  CardTitle={"HTML, CSS, JavaScript, React and Firebase"}
                  SecSubtitle={"Finished all in 2020"}
                  PpalText={
                    "Whit this academy I learn basics of HTML,CSS,JavaScript,React and Firebase. The basics for a Fullstack developer Web."
                  }
                />
              </div>
              <div className="col-md-4 my-3 exp-med position-absolute top-55 start-50 translate-middle">
                <EducationCard
                  img={educacionlogo}
                  FirstSubtitle={"Educacion it - Alumni"}
                  CardTitle={"Full Stack Developer with JAVA"}
                  SecSubtitle={"Finished in 2021"}
                  PpalText={
                    "This course gave me the tools and knowledge basics for web development based on JAVA technologies."
                  }
                />{" "}
              </div>

              <div className="col-md-4 exp-med my-3 position-absolute top-55 end-0 translate-middle-y">
                <EducationCard
                  img={franciscologo}
                  FirstSubtitle={"Colegio Parroquial San Francisco de Asís"}
                  CardTitle={"Bachelor's degree in Economy"}
                  SecSubtitle={"Finished in 2015"}
                  PpalText={
                    "This is my high school, in which I've learnt all I needed to know to become what I am today."
                  }
                />{" "}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Experience;
