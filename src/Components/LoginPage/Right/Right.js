import React, { Component } from "react";
import { LoginRight, LoginLogo } from "./styleRight";
import img from "../../../materials/images/Sell_it.png";
import FormContainer from "../../../Containers/LoginPageContainers/FormContainer";

class Right extends Component {
  render() {
    return (
      <LoginRight className="login__right">
        <LoginLogo src={img} alt="Logo" />
        <FormContainer />
      </LoginRight>
    );
  }
}

export default Right;
