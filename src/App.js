import React, { Component } from "react";
import LoginPageContainer from "./New/Containers/LoginPageContainers/LoginPageContainer";
import ProductListContainer from "./New/Containers/ProductListContainers/ProductListContainer";

class App extends Component {
  render() {
    let html = document.querySelector("html");
    let width = parseInt(getComputedStyle(document.body).width);
    console.log(width);
    if (width <= 1440 && width > 1366) {
      html.style.fontSize = 18 + "px";
    } else if (width <= 1366 && width > 880) {
      html.style.fontSize = 16 + "px";
    } else if (width <= 880) {
      html.style.fontSize = 10 + "px";
    } else {
      html.style.fontSize = 22 + "px";
    }
    return <ProductListContainer />;
  }
}

export default App;
