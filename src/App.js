import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPageContainer from "./Containers/LoginPageContainers/LoginPageContainer";
import ProductListContainer from "./Containers/ProductListContainers/ProductListContainer";
import ProductPage from "./Containers/ProductPage/ProductPage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginPageContainer} />
          <Route exact path="/product-list" component={ProductListContainer} />
          <Route
            exact
            path="/product-list/items::id"
            render={({
              match: {
                params: { id }
              }
            }) => {
              return <ProductPage id={id} />;
            }}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
