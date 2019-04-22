import React, { Component } from "react";
import "./Button.css";

class Button extends Component {
  render() {
    let { text, tab } = this.props;

    return (
      <button className="form-button button__text text" onClick={tab}>
        <span className="button-text text-value">{text}</span>
      </button>
    );
  }
}

export default Button;
