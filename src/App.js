import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPageContainer from "./Containers/LoginPageContainers/LoginPageContainer";
import ProductListContainer from "./Containers/ProductListContainers/ProductListContainer";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxThunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import reducer from "./reducer";

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(reduxThunk))
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={LoginPageContainer} />
            <Route
              exact
              path="/product-list"
              component={ProductListContainer}
            />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
