import { reducer as formReducer } from "redux-form";
import { combineReducers } from "redux";
import productsPage from "./main-page/main-page";
import loginPage from "./login-page/login-page";
import auth from "./login-page/auth";
import profile from "./profile/profile";

export const rootReducer = combineReducers({
  items: productsPage,
  form: formReducer,
  login: loginPage,
  auth: auth,
  profile
});
