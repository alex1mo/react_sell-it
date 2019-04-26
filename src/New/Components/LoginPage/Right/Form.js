import React, { Component } from "react";
import Button from "../../Common/Button/Button";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import { LoginForm, FormButtons } from "./styleRight";

class Form extends Component {
  render() {
    let { tab, getTab } = this.props;

    return (
      <LoginForm className="home-right right__form form">
        <FormButtons className="right-form form__button button">
          <Button text="Sign In" getTab={getTab} />
          <Button text="Sign Up" getTab={getTab} />
        </FormButtons>
        {(tab === "Sign Up" && <SignUp />) || <SignIn />}
        <Button text={(tab === "Sign Up" && "Check in") || "Login"} />
      </LoginForm>
    );
  }
}

export default Form;
