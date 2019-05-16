import { all } from "redux-saga/effects";
import { watchFetchProducts } from "./products-list/all-list";
import { watchGetProduct } from "./products-list/details";

let watch = [watchFetchProducts(), watchGetProduct()];

export default function* rootSaga() {
  yield all(watch);
}
