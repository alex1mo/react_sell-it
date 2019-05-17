import { details, allList } from "action-type/products-page/products-page";

const initialState = {
  isLoading: null,
  isLoadingError: null,
  data: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case allList.request || details.request:
      return {
        isLoading: false
      };
    case allList.success || details.success:
      return { isLoading: true, isLoadingError: false, data: action.payload };
    case allList.failure || details.failure:
      return { isLoading: true, isLoadingError: true, data: action.payload };
    default:
      return state;
  }
}
