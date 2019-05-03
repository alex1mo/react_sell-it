import { put, call, takeEvery } from "redux-saga/effects";
import axios from "axios";
import {
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS
} from "action-type/products-type";

export function* watchFetchProducts() {
  yield takeEvery(FETCH_PRODUCTS_REQUEST, fetchProducts);
}

function* fetchProducts() {
  try {
    const result = yield call(axios.get, "http://light-it-04.tk/api/posters/");
    yield put({ type: FETCH_PRODUCTS_SUCCESS, payload: result.data.data });
  } catch (error) {
    yield put({ type: FETCH_PRODUCTS_FAILURE, payload: error });
  }
}
