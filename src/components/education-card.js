import React from "react";
import "./education-card.css";

class EducationCard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="card card-education mx-auto">
          <img src={this.props.img} class="card-img-top" alt="..." />
          <p className="pt-3 mb-0">{this.props.FirstSubtitle}</p>
          <div class="card-body">
            <h5 class="card-title">{this.props.CardTitle}</h5>
            <i>{this.props.SecSubtitle}</i>
            <p class="card-text">{this.props.PpalText}</p>
          </div>
          <a href="#" class="btn btn-primary mt-3">
            {this.props.BtnText}
          </a>
        </div>
      </React.Fragment>
    );
  }
}

export default EducationCard;
