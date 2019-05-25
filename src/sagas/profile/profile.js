import { put, call, takeEvery } from "redux-saga/effects";

import { getProfile } from "action-type/login-page/login-page";

import { profileRequest } from "api-cli/login";

function* watchProfile() {
  yield takeEvery(getProfile.request, getProfileData);
}

function* getProfileData({ token }) {
  try {
    const result = yield call(profileRequest, {
      Authorization: `JWT ${token}`
    });
    yield put({ type: getProfile.success, payload: result.data });
  } catch (error) {
    yield put({ type: getProfile.failure, payload: error });
  }
}

export default [watchProfile()];
