import React from "react";
import SectionBar from "./section-bar.js";
import Footer from "./footer.js";

function Layout(props) {
  const children = props.children;
  return (
    <React.Fragment>
      <SectionBar />
      {children}
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
