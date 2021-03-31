import React from "react";
import "./card.css";

class Card extends React.Component {
  render() {
    return (
      <div className="card center my-2">
        <div className="my-auto">
          <img
            src={this.props.img}
            className="card-img-top img-about"
            alt="placeholder"
          />
          <div className="card-body h-50 top-50 start-50">
            <h5 className="card-title">{this.props.section}</h5>
            <p className="card-text">{this.props.text}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
