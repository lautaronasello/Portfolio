import React from "react";
import "./education-card.css";

class EducationCard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="card card-education">
          <img
            src="https://via.placeholder.com/100"
            class="card-img-top"
            alt="..."
          />
          <p className="pt-3 mb-0">Academy</p>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <i>Finished in 2020</i>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
          <a href="#" class="btn btn-primary mt-3">
            View Certificate
          </a>
        </div>
      </React.Fragment>
    );
  }
}

export default EducationCard;
