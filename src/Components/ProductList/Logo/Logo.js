import React, { Component } from "react";
import "./Logo.css";
import logo from "./material/Sell_it.png";

class Logo extends Component {
  render() {
    return (
      <div className="productlist-header header__logo logo">
        <img src={logo} alt="logo" className="productlist-logo logo__img" />
      </div>
    );
  }
}

export default Logo;
