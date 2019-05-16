import { put, call, takeEvery } from "redux-saga/effects";
import axios from "axios";
import allList from "action-type/products-list/all-list";

export function* watchFetchProducts() {
  yield takeEvery(allList.FETCH_PRODUCTS_REQUEST, fetchProducts);
}

function* fetchProducts() {
  try {
    const result = yield call(axios.get, "http://light-it-04.tk/api/posters/");
    yield put({
      type: allList.FETCH_PRODUCTS_SUCCESS,
      payload: result.data.data
    });
  } catch (error) {
    yield put({ type: allList.FETCH_PRODUCTS_FAILURE, payload: error });
  }
}
