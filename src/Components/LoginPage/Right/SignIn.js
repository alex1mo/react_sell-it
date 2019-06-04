import React, { Fragment } from "react";

import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";

import { WrapperInput, Error } from "./styleRight";

import Input from "../../Common/Input/Input";
import Button from "../../Common/Button/Button";

import { validate } from "utils/validateSignIn";

import { authentication } from "action-creator/login-page/login-page";

let SignIn = ({ handleSubmit, signin, authentication, login }) => {
  return (
    <WrapperInput
      onSubmit={handleSubmit(() => authentication(signin && signin.values))}
      action="#"
      className="right-form form__input input"
    >
      <Field name="email" type="email" placeholder="Email" component={Input} />
      <Field
        name="password"
        component={Input}
        type="password"
        placeholder="Password"
      />
      <Button
        text={(!login.isLoading && "Login...") || "Login"}
        type="submit"
        width={45.1}
      />
      {login.isLoadingError && (
        <Error>{login.data.data.non_field_errors[0]}</Error>
      )}
    </WrapperInput>
  );
};

SignIn = reduxForm({
  form: "signin",
  validate
})(SignIn);

const mapStateToProps = ({ login, form: { signin } }) => {
  return { login, signin };
};

export default connect(
  mapStateToProps,
  { authentication }
)(SignIn);
