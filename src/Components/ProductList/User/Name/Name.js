import React, { Component } from "react";
import "./Name.css";

class Name extends Component {
  render() {
    return (
      <div className="header-user user__name name">
        <div className="user-name name__foto" />
        <span className="user-name name__text">Kim Evans</span>
      </div>
    );
  }
}

export default Name;
