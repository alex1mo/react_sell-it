import React, { Component } from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
