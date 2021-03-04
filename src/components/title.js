import React from "react";
import { Fragment } from "react";

class Title extends React.Component {
  render() {
    return (
      <div className="text-center">
        <div className="title-container margin">
          <h1 className="title">{this.props.title} </h1>
          <h2 className="subtitle center">{this.props.subtitle}</h2>
        </div>
      </div>
    );
  }
}

export default Title;
