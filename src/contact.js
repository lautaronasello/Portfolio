import React from "react";
import "./contact.css";
import SocialMedia from "./components/social-media";
class Contact extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="text-center position-static">
          <div className="position-absolute top-50 start-50 translate-middle">
            <h1>CONTACT</h1>
            <h3>
              If you want to reach me out, feel free to send me a message on
              LinkedIn!
            </h3>
            <h4>Click the icon below to do so</h4>
            <div>
              <SocialMedia />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Contact;
