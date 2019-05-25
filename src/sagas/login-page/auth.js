import { put, call, takeEvery } from "redux-saga/effects";

import { userAuth } from "action-type/login-page/login-page";

import { authVerify } from "api-cli/login";

function* watchUserAuth() {
  yield takeEvery(userAuth.request, authorization);
}

function* authorization({ token }) {
  try {
    const result = yield call(authVerify, { token });
    yield put({ type: userAuth.success, payload: result });
  } catch (error) {
    yield put({
      type: userAuth.failure,
      payload: error
    });
  }
}

export default [watchUserAuth()];
