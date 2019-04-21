import React, { Component } from "react";
import "./Right.css";
import Logo from "./Logo/Logo";

class Right extends Component {
  render() {
    return (
      <div className="body__right right">
        <Logo />
        <div className="body-right right__form" />
      </div>
    );
  }
}

export default Right;
