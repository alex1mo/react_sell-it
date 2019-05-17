import React, { Component } from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import LoginPage from "Components/LoginPage/LoginPage";
import MainPage from "Components/MainPage/MainPage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/main" component={MainPage} />
          <Route path="/" component={LoginPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
