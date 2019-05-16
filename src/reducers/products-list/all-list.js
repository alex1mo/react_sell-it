import allList from "action-type/products-list/all-list";

const initialState = {
  isLoading: null,
  isLoadingError: null,
  products: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case allList.FETCH_PRODUCTS_REQUEST:
      return {
        isLoading: false
      };
    case allList.FETCH_PRODUCTS_SUCCESS:
      return {
        isLoading: true,
        isLoadingError: false,
        items: action.payload
      };
    case allList.FETCH_PRODUCTS_FAILURE:
      return { isLoading: true, isLoadingError: true };
    default:
      return state;
  }
}
