import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    let { getPage } = this.props;

    return (
      <div className="footer">
        <div className="footer__text text">
          <span className="footer-text text__value">
            2019 - front-end labs Light IT
          </span>
          <a className="footer-text text__value" href="#" onClick={getPage}>
            Home
          </a>
          <a className="footer-text text__value" href="#" onClick={getPage}>
            Product
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
