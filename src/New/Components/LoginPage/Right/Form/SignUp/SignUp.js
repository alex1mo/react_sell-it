import React, { Component } from "react";
import "./SignUp.css";
import Input from "../Input/Input";

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
      <form action="#" className="right-form form__input_signup input">
        <Input type="text" placeholder="Name" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Confirm password" />
      </form>
    );
  }
}

export default SignUp;
