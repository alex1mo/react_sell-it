import React, { Component } from "react";
import Input from "../../Common/Input/Input";
import { WrapperInput } from "./styleRight";

class SignUp extends Component {
  state = {
    tab: "Sign In"
  };

  tab = e => {
    let text = e.currentTarget.firstElementChild.innerHTML;
    this.setState({
      tab: text
    });
  };

  render() {
    return (
      <WrapperInput action="#" className="right-form form__input_signup input">
        <Input type="text" placeholder="Name" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Confirm password" />
      </WrapperInput>
    );
  }
}

export default SignUp;
