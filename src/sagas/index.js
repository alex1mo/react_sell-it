import { all } from "redux-saga/effects";
import { watchFetchProducts } from "./products-list/all-list";
import { watchGetProduct } from "./products-list/details";
import loginPage from "./login-page/login-page";

let watch = [watchFetchProducts(), watchGetProduct(), ...loginPage];

export default function* rootSaga() {
  yield all(watch);
}
