import React from "react";
import { Wrapper, Text } from "./styleButton";

const Button = props => {
  let { text, getTab } = props;

  return (
    <Wrapper className="form-button button__text text" onClick={getTab}>
      <Text className="button-text text-value">{text}</Text>
    </Wrapper>
  );
};

export default Button;
