import { put, call, takeEvery } from "redux-saga/effects";
import axios from "axios";
import details from "action-type/products-list/details";

export function* watchGetProduct() {
  yield takeEvery(details.request, getProduct);
}

function* getProduct({ id }) {
  try {
    const result = yield call(
      axios.get,
      `http://light-it-04.tk/api/posters/${id}/`
    );
    yield put({ type: details.success, payload: result.data });
  } catch (error) {
    yield put({ type: details.failure, payload: error });
  }
}
