import React, { Component } from "react";
import "./Right.css";
import Logo from "./Logo/Logo";
import Form from "./Form/Form";

class Right extends Component {
  render() {
    return (
      <div className="body__right right">
        <Logo />
        <Form />
      </div>
    );
  }
}

export default Right;
