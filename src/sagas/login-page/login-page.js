import { put, call, takeEvery } from "redux-saga/effects";

import { signUp, signIn } from "action-type/login-page/login-page";

import { regRequest, authRequest } from "api-cli/login";

import { history } from "index";

function* watchReg() {
  yield takeEvery(signUp.request, registration);
}

function* registration({ data }) {
  try {
    const result = yield call(regRequest, data);
    yield put({ type: signUp.success, payload: result.data });
  } catch (error) {
    yield put({ type: signUp.failure, payload: error });
  }
}

function* watchAuth() {
  yield takeEvery(signIn.request, authentication);
}

function* authentication({ data }) {
  try {
    const result = yield call(authRequest, data);
    yield localStorage.setItem("token", result.data.token);
    yield put({ type: signIn.success, payload: result.data.token });
    yield result.data.token &&
      result.data.user &&
      history.push("/main/products-list");
  } catch (error) {
    yield put({
      type: signIn.failure,
      payload: error
    });
  }
}

export default [watchReg(), watchAuth()];
