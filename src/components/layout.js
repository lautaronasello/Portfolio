import React from "react";
import SectionBar from "./section-bar.js";

function Layout(props) {
  const children = props.children;
  return (
    <React.Fragment>
      <SectionBar />
      {children}
    </React.Fragment>
  );
}

export default Layout;
