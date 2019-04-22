import React, { Component } from "react";
import "./Left.css";
import Image from "./Image/Image";

class Left extends Component {
  render() {
    return (
      <div className="body__left left">
        <Image />
      </div>
    );
  }
}

export default Left;
