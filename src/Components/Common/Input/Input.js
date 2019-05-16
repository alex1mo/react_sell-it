import React from "react";
import { StyleInput } from "./styleInput";

function textError(touched, error) {
  if (touched && error) {
    return <div className="form-input input__error">{error}</div>;
  } else {
    return <div className="form-input input__null" />;
  }
}

const Input = ({ type, placeholder, input, meta: { touched, error } }) => {
  return (
    <StyleInput>
      <input
        type={type}
        className="form-input input__text"
        placeholder={placeholder}
        {...input}
      />
      {textError(touched, error)}
    </StyleInput>
  );
};

export default Input;
