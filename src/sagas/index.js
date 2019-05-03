import { watchFetchProducts } from "./products-saga";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([watchFetchProducts()]);
}
