import { reducer as formReducer } from "redux-form";
import { combineReducers } from "redux";
import allList from "./products-list/all-list";
import details from "./products-list/details";
import loginPage from "./login-page/login-page";

export const rootReducer = combineReducers({
  products: allList,
  product: details,
  form: formReducer,
  login: loginPage
});
