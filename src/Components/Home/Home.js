import React, { Component } from "react";
import "./Home.css";
import Left from "./Left/Left";
import Right from "./Right/Right";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Left />
        <Right />
      </div>
    );
  }
}

export default Home;
