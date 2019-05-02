import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxThunk from "redux-thunk";
import { loger } from "./middleware/loger";


import reducer from "./reducer";
import rootSaga from "./sagas/products";

import createSagaMiddleware from 'redux-saga'
const sagaMiddleware = createSagaMiddleware()


const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(reduxThunk, sagaMiddleware, loger))
);

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
