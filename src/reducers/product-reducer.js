const initialState = {
  isLoading: null,
  product: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "GET_PRODUCT":
      return { isLoading: true, product: action.payload };
    case "GET_PRODUCT_ERROR":
      return { isLoading: true, isLoadingError: true };
    default:
      return state;
  }
}
