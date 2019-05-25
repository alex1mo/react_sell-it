import { all } from "redux-saga/effects";
import loginPage from "./login-page/login-page";
import mainPage from "./main-page/main-page";
import auth from "./login-page/auth";
import profile from "./profile/profile";

let watch = [...mainPage, ...loginPage, ...auth, ...profile];

export default function* rootSaga() {
  yield all(watch);
}
