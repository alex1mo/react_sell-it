import React, { Component } from "react";
import "./Left.css";
import Image from "./Image/Image";

class Left extends Component {
  render() {
    return (
      <div className="home__left left">
        <Image />
      </div>
    );
  }
}

export default Left;
