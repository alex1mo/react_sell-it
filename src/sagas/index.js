import { all } from "redux-saga/effects";
import loginPage from "./login-page/login-page";
import productsPage from "./products-page/products-page";

let watch = [...productsPage, ...loginPage];

export default function* rootSaga() {
  yield all(watch);
}
