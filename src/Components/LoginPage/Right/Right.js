import React from "react";
import { LoginRight, LoginLogo } from "./styleRight";
import img from "materials/images/Sell_it.png";
import Form from "./Form";

const Right = () => {
  return (
    <LoginRight className="login__right">
      <LoginLogo src={img} alt="Logo" />
      <Form />
    </LoginRight>
  );
};

export default Right;
