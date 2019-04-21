import React, { Component } from "react";
import "./App.css";
import Left from "./Components/Body/Left/Left";
import Right from "./Components/Body/Right/Right";
import Footer from "./Components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="body">
          <Left />
          <Right />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
