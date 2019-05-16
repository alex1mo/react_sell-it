import React from "react";
import Login from "./styleIndex";

import Left from "./Left/Left";
import Right from "./Right/Right";

const LoginPage = () => {
  return (
    <Login className="login">
      <Left />
      <Right />
    </Login>
  );
};

export default LoginPage;
