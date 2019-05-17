import { reducer as formReducer } from "redux-form";
import { combineReducers } from "redux";
import productsPage from "./products-page/products-page";
import loginPage from "./login-page/login-page";

export const rootReducer = combineReducers({
  items: productsPage,
  form: formReducer,
  login: loginPage
});
