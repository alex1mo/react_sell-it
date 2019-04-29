import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPageContainer from "./New/Containers/LoginPageContainers/LoginPageContainer";
import ProductListContainer from "./New/Containers/ProductListContainers/ProductListContainer";

class App extends Component {
  render() {
    let html = document.querySelector("html");
    let width = parseInt(getComputedStyle(document.body).width);
    if (width <= 1440 && width > 1366) {
      html.style.fontSize = 18 + "px";
    } else if (width <= 1366 && width > 880) {
      html.style.fontSize = 16 + "px";
    } else if (width <= 880) {
      html.style.fontSize = 10 + "px";
    } else {
      html.style.fontSize = 22 + "px";
    }
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginPageContainer} />
          <Route exact path="/product-list" component={ProductListContainer} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
