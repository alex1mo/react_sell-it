import { put, call, takeEvery } from "redux-saga/effects";

import { signUp, signIn } from "action-type/login-page/login-page";

import { regRequest, authRequest } from "api-cli/login";

function* watchReg() {
  yield takeEvery(signUp.request, reg);
}

function* reg({ data }) {
  try {
    const result = yield call(regRequest, data);
    yield put({ type: signUp.success, payload: result.data });
  } catch (error) {
    yield put({ type: signUp.failure, payload: error.response.data });
  }
}

function* watchAuth() {
  yield takeEvery(signIn.request, auth);
}

function* auth({ data }) {
  console.log(data);
  try {
    const result = yield call(authRequest, data);
    yield put({ type: signIn.success, payload: result.data });
    sessionStorage.setItem("token", result.data.token);
  } catch (error) {
    yield put({ type: signIn.failure, payload: error.response.data });
  }
}

export default [watchReg(), watchAuth()];
