import React from "react";

import { WrapperInput } from "./styleRight";

import Input from "../../Common/Input/Input";
import Button from "../../Common/Button/Button";

import { reduxForm, Field } from "redux-form";
import { validate } from "../../../utils/validateSignUp";

let SignUp = ({ handleSubmit }) => {
  return (
    <WrapperInput
      onSubmit={handleSubmit(() => console.log("test"))}
      action="#"
      className="right-form form__input_signup input"
    >
      <Field name="username" component={Input} type="text" placeholder="Name" />
      <Field name="email" type="email" placeholder="Email" component={Input} />
      <Field
        name="password"
        type="password"
        placeholder="Password"
        component={Input}
      />
      <Field
        name="confirmPassword"
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

export default SignUp;
