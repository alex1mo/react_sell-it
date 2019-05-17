import React from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";

import { WrapperInput } from "./styleRight";

import Input from "../../Common/Input/Input";
import Button from "../../Common/Button/Button";

import { registration } from "action-creator/login-page/login-page";

import { validate } from "utils/validateSignUp";

let SignUp = ({ handleSubmit, login, signup, registration }) => {
  return (
    <WrapperInput
      onSubmit={handleSubmit(() => registration(signup && signup.values))}
      action="#"
      className="right-form form__input_signup input"
    >
      <Field name="username" component={Input} type="text" placeholder="Name" />
      <Field name="email" type="email" placeholder="Email" component={Input} />
      <Field
        name="password1"
        type="password"
        placeholder="Password"
        component={Input}
      />
      <Field
        name="password2"
        type="password"
        placeholder="Confirm password"
        component={Input}
      />
      <Button text="Check in" type="submit" width={45.1} />
    </WrapperInput>
  );
};

SignUp = reduxForm({
  form: "signup",
  validate
})(SignUp);

const mapStateToProps = ({ login, form: { signup } }) => {
  return { login, signup };
};

export default connect(
  mapStateToProps,
  { registration }
)(SignUp);
