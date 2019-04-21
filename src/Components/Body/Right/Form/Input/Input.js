import React, { Component } from "react";
import "./Input.css";

class Input extends Component {
  render() {
    let { type, placeholder } = this.props;
    return (
      <input
        type={type}
        className="form-input input__text"
        placeholder={placeholder}
      />
    );
  }
}

export default Input;
