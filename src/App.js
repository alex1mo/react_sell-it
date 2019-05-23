import React, { Component } from "react";

import { Switch, Route } from "react-router-dom";

import LoginPage from "Components/LoginPage/LoginPage";
import MainPage from "./Components/MainPage/MainPage";
import AuthRequired from "./hoc/AuthRequired";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/main" component={AuthRequired(MainPage)} />
        <Route path="/" component={LoginPage} />
      </Switch>
    );
  }
}

export default App;
