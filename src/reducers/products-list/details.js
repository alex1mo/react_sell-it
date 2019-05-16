import details from "action-type/products-list/details";

const initialState = {
  isLoading: null,
  isLoadingError: null,
  item: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case details.request:
      return {
        isLoading: false
      };
    case details.success:
      return { isLoading: true, isLoadingError: false, item: action.payload };
    case details.failure:
      return { isLoading: true, isLoadingError: true };
    default:
      return state;
  }
}
