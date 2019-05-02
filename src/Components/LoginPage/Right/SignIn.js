import React from "react";
import Input from "../../Common/Input/Input";
import { WrapperInput } from "./styleRight";
import { reduxForm } from ‘redux - form’

const SignIn = () => {
  return (
    <WrapperInput action="#" className="right-form form__input input">
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
    </WrapperInput>
  );
};

SignIn = reduxFrom({
  from: "uniqname"
})

export default SignIn;


