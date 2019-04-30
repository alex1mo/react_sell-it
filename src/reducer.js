const initialState = {
  // isLoading: null,
  productList: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return { isLoading: true, productList: action.payload };
    case "FETCH_PRODUCTS_ERROR":
      return { isLoading: false };
    default:
      return state;
  }
}
