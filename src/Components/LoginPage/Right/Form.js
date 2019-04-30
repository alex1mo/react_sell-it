import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Common/Button/Button";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import { LoginForm, FormButtons } from "./styleRight";

const Form = ({ tab, getTab }) => {
  return (
    <LoginForm className="home-right right__form form">
      <FormButtons className="right-form form__button button">
        <Button text="Sign In" getTab={getTab} />
        <Button text="Sign Up" getTab={getTab} />
      </FormButtons>
      {(tab === "Sign Up" && <SignUp />) || <SignIn />}
      <Link
        to="/product-list"
        style={{
          width: 100 + "%",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <Button text={(tab === "Sign Up" && "Check in") || "Login"} />
      </Link>
    </LoginForm>
  );
};

export default Form;
