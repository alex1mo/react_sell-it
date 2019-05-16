import React from "react";
import { Wrapper, Text } from "./styleButton";

const Button = props => {
  let { width, text, type } = props;
  return (
    <Wrapper
      width={width}
      className="form-button button__text text"
      type={type}
    >
      <Text className="button-text text-value">{text}</Text>
    </Wrapper>
  );
};

export default Button;
