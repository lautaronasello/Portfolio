import React from "react";

class Title extends React.Component {
  render() {
    return (
      <div className="text-center ">
        <div className="title-container my-5">
          <h1 className="title">{this.props.title} </h1>
          <h2 className="subtitle center">{this.props.subtitle}</h2>
        </div>
      </div>
    );
  }
}

export default Title;
