import src from "*.jpeg";
import { render } from "@testing-library/react";
import React, { Fragment } from "react";
import Card from "./card";
// import photo from "./photo.png";

class Home extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="card-group">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </Fragment>
    );
  }
}

export default Home;
