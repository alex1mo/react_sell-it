import {
  details,
  allList,
  searchProducts
} from "action-type/main-page/main-page";

const initialState = {
  isLoading: null,
  isLoadingError: null,
  data: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case allList.request:
    case details.request:
    case searchProducts.request:
      return {
        ...state,
        isLoading: true
      };
    case allList.success:
    case details.success:
    case searchProducts.success:
      return { ...state, isLoading: false, data: action.payload };
    case allList.failure:
    case details.failure:
    case searchProducts.failure:
      return { isLoading: false, isLoadingError: true, data: action.payload };
    default:
      return state;
  }
}
