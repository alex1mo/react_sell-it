import { reducer as formReducer } from "redux-form";
import { combineReducers } from "redux";
import productsReducer from "./products-reducer";
import productReducer from "./product-reducer";

export const rootReducer = combineReducers({
  products: productsReducer,
  product: productReducer,
  form: formReducer
});
