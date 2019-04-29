import React from "react";
import DivFooter from "./StyleFooter";

const Footer = props => {
  return (
    <DivFooter className="footer">
      <div className="footer__text text">
        <span className="footer-text text__value">
          2019 - front-end labs Light IT
        </span>
      </div>
    </DivFooter>
  );
};

export default Footer;
