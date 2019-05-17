import { put, call, takeEvery } from "redux-saga/effects";
import { details, allList } from "action-type/products-page/products-page";
import {
  getProduct as getItem,
  fetchProducts as fetchItems
} from "api-cli/products-page";

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

export default [watchGetProduct(), watchFetchProducts()];
