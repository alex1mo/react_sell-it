import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";

import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

import { createBrowserHistory } from "history";
import interseptors from "./api-cli/interseptors";

import { rootReducer } from "./reducers";

import rootSaga from "./sagas";

import "index.scss";
import App from "App";
import * as serviceWorker from "serviceWorker";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export const history = createBrowserHistory();
interseptors(store, history);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
