import React from "react";
// import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";

import { WrapperInput } from "./styleRight";

import Input from "../../Common/Input/Input";
import Button from "../../Common/Button/Button";

import { validate } from "utils/validateSignIn";

import { authentication } from "action-creator/login-page/login-page";

// const styleLink = {
//   width: "100%",
//   display: "flex",
//   justifyContent: "center"
// };

let SignIn = ({ handleSubmit, signin, authentication }) => {
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
      {/* <Link to="/main" style={styleLink}> */}
      <Button text="Login" type="submit" width={45.1} />
      {/* </Link> */}
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
