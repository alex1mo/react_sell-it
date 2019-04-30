import React from "react";
import { LoginRight, LoginLogo } from "./styleRight";
import img from "../../../materials/images/Sell_it.png";
import FormContainer from "../../../Containers/LoginPageContainers/FormContainer";

const Right = () => {
  return (
    <LoginRight className="login__right">
      <LoginLogo src={img} alt="Logo" />
      <FormContainer />
    </LoginRight>
  );
};

export default Right;
