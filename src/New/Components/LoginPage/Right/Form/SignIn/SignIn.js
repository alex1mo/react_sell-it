import React, { Component } from "react";
import "./SignIn.css";
import Input from "../Input/Input";

class SignIn extends Component {
  state = {
    tab: "Sign In"
  };

  render() {
    return (
      <form action="#" className="right-form form__input input">
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
      </form>
    );
  }
}

export default SignIn;
