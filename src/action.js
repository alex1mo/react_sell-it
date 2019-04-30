export const fetchProducts = () => dispatch => {
  fetch(
    "https://pixabay.com/api/?key=10255087-ad858ae5e4adfc8ab26a27a9e&q=computer&category=businessi&image_type=photo&per_page=100"
  )
    .then(response => {
      return response.json();
    })
    .then(data => {
      dispatch({ type: "FETCH_PRODUCTS", payload: data });
    })
    .catch(error => dispatch({ type: "FETCH_PRODUCTS_ERROR", payload: error }));
};
