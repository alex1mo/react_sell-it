import React from "react";

import { WrapperInput } from "./styleRight";

import Input from "../../Common/Input/Input";
import Button from "../../Common/Button/Button";

import { reduxForm, Field } from "redux-form";
import { validate } from "../../../utils/validateSignIn";

let SignIn = ({ handleSubmit }) => {
  return (
    <WrapperInput
      onSubmit={handleSubmit(() => console.log("test"))}
      action="#"
      className="right-form form__input input"
    >
      <Field name="username" component={Input} type="text" placeholder="Name" />
      <Field
        name="password"
        component={Input}
        type="password"
        placeholder="Password"
      />
      <Button text="Login" type="submit" width={45.1} />
    </WrapperInput>
  );
};

SignIn = reduxForm({
  form: "signin",
  validate
})(SignIn);

export default SignIn;
