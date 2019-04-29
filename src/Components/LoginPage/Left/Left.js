import React from "react";
import { LoginLeft, ImgLeft } from "./styleLeft";
import img from "../../../materials/images/login-right-section-image.png";

const Left = props => {
  return (
    <LoginLeft className="login__left">
      <ImgLeft img={img} />
    </LoginLeft>
  );
};

export default Left;
