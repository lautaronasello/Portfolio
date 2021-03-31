import React from "react";
import "./education-card.css";

class EducationCard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="card card-education m-auto ">
          <div className="mystyle position-relative">
            <img
              src={this.props.img}
              className="position-absolute top-50 start-50 translate-middle"
              alt="EscuelaDevRock"
            />
          </div>
          <p className="pt-3 mb-0">{this.props.FirstSubtitle}</p>
          <div class="card-body">
            <h5 class="card-title">{this.props.CardTitle}</h5>
            <i>{this.props.SecSubtitle}</i>
            <p class="card-text">{this.props.PpalText}</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default EducationCard;
