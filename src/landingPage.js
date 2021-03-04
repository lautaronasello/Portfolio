import React, { Fragment } from "react";
import Home from "./components/home.js";
import { render } from "@testing-library/react";

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
