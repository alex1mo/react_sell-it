import React, { Component } from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import LoginPageContainer from "./Containers/LoginPageContainers/LoginPage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={LoginPageContainer} />
          {/* <Route path="/sign-in" component={LoginPageContainer} />
          <Route path="/sign-up" component={LoginPageContainer} /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
