import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 center">
              <span className="text-muted position-absolute start-50  translate-middle ">
                © Lautaro Nasello - 2021
              </span>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
