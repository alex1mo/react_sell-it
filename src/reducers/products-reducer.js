import {
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE
} from "../action-type/products-type";

const initialState = {
  isLoading: null,
  products: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return {
        isLoading: true,
        items: action.payload
      };
    case FETCH_PRODUCTS_FAILURE:
      return { isLoading: true, isLoadingError: true };
    default:
      return state;
  }
}
