import React from "react";
import "./card.css";
import { Link } from "react-router-dom";

class Card extends React.Component {
  render() {
    return (
      <div className="card center">
        <img
          src="https://via.placeholder.com/100"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body h-50 top-50 start-50">
          <h5 className="card-title">{this.props.section}</h5>
          <p className="card-text">{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default Card;
