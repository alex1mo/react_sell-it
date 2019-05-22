import { reducer as formReducer } from "redux-form";
import { combineReducers } from "redux";
import productsPage from "./main-page/main-page";
import loginPage from "./login-page/login-page";
import auth from "./login-page/auth";

export const rootReducer = combineReducers({
  items: productsPage,
  form: formReducer,
  login: loginPage,
  auth: auth
});
