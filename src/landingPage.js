import React, { Fragment } from "react";
import Home from "./components/home.js";

class LandingPage extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="big-second-container">
          <Home />
        </div>
      </Fragment>
    );
  }
}

export default LandingPage;
