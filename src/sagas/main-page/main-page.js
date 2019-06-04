import { put, call, takeEvery } from "redux-saga/effects";
import {
  details,
  allList,
  searchProducts as search
} from "action-type/main-page/main-page";

import {
  getProduct as getItem,
  fetchProducts as fetchItems
} from "api-cli/main-page";

function* watchGetProduct() {
  yield takeEvery(details.request, getProduct);
}

function* getProduct({ id }) {
  try {
    const result = yield call(getItem, id);
    yield put({ type: details.success, payload: result.data });
  } catch (error) {
    yield put({ type: details.failure, payload: error });
  }
}

function* watchFetchProducts() {
  yield takeEvery(allList.request, fetchProducts);
}

function* fetchProducts() {
  try {
    const result = yield call(fetchItems);
    yield put({
      type: allList.success,
      payload: result.data.data
    });
  } catch (error) {
    yield put({ type: allList.failure, payload: error });
  }
}

function* watchSearchProducts() {
  yield takeEvery(search.request, searchProducts);
}

function* searchProducts({ value }) {
  console.log(value);
  try {
    const result = yield call(fetchItems);
    yield put({
      type: search.success,
      payload: result.data.data
    });
  } catch (error) {
    yield put({ type: search.failure, payload: error });
  }
}

export default [watchGetProduct(), watchFetchProducts(), watchSearchProducts()];
