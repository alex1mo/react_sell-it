import { reducer as formReducer } from ‘redux - form’
import { combineReducers } from ‘redux’

const rootReducer = combineReducers({
….
form: formReducer,
})


const initialState = {
  isLoading: null,
  productList: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return {
        isLoading: true, productList: action.payload,
      };
    case "FETCH_PRODUCTS_ERROR":
      return { isLoading: false };
    case "GET_PRODUCT":
      return { isLoading: true, product: action.payload };
    case "GET_PRODUCT_ERROR":
      return { isLoading: false };
    default:
      return state;
  }
}
