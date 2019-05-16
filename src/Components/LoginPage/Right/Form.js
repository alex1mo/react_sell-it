import React from "react";

import { Switch, Route, Link } from "react-router-dom";

import { LoginForm, Tab } from "./styleRight";

import Button from "../../Common/Button/Button";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

const style = {
  width: "45.1%"
};

const Form = () => {
  return (
    <LoginForm className="home-right right__form form">
      <Tab className="right-form form__button button">
        <Link to="/sign-in" style={style}>
          <Button text="Sign In" />
        </Link>
        <Link to="/sign-up" style={style}>
          <Button text="Sign Up" />
        </Link>
      </Tab>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
      </Switch>
    </LoginForm>
  );
};

export default Form;
