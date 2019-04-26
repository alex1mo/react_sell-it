import React from "react";
import LoginPage from "../../Components/LoginPage/index/";

const LoginPageContainer = () => {
  let html = document.querySelector("html");
  let width = window.innerWidth;
  if (width <= 1366) {
    html.style.fontSize = 16 + "px";
  } else {
    html.style.fontSize = 32 + "px";
  }

  return <LoginPage />;
};

export default LoginPageContainer;
