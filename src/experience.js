import React from "react";
import EducationCard from "./components/education-card";
import escuelalogo from "./components/img/escueladevrock.png";
import educacionlogo from "./components/img/logo-educacionit.png";
import franciscologo from "./components/img/colegio.JPG";
import "./experience.css";

class Experience extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container top-15 ">
          <div className="rov">
            <div className="col-md-12">
              <br />
              <br />
              <br />
            </div>
          </div>
          <div className="row text-center my-3 ">
            <div className="col-md-12 mb-3">
              <h1>Education</h1>
            </div>
          </div>
          <div className=" text-center">
            <div className="row ">
              <div className="col-md-4 mb-4">
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
              <div className="col-md-4 mb-4 ">
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

              <div className="col-md-4 mb-4 ">
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
