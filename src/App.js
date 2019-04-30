import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPageContainer from "./Containers/LoginPageContainers/LoginPageContainer";
import ProductListContainer from "./Containers/ProductListContainers/ProductListContainer";

class App extends Component {
  render() {
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
