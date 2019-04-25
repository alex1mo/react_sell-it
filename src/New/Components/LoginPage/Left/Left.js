import React, { Component } from "react";
import HomeLeft from "./styleLeft.js";
import Image from "../../Common/Image/Image";

class Left extends Component {
  render() {
    return (
      <HomeLeft color="black" size={20}>
        <Image />
      </HomeLeft>
    );
  }
}

export default Left;
