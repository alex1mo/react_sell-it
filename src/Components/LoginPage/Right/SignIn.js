import React, { Component } from "react";
import Input from "../../Common/Input/Input";
import { WrapperInput } from "./styleRight";

class SignIn extends Component {
  state = {
    tab: "Sign In"
  };

  render() {
    return (
      <WrapperInput action="#" className="right-form form__input input">
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
      </WrapperInput>
    );
  }
}

export default SignIn;
