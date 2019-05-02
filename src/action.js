export const fetchProducts = () => dispatch => {
  fetch("http://light-it-04.tk/api/posters/")
    .then(response => {
      console.log(response);

      return response.json();
    })
    .then(data => {
      console.log(data);
      dispatch({ type: "FETCH_PRODUCTS", payload: data.data });
    })
    .catch(error => dispatch({ type: "FETCH_PRODUCTS_ERROR", payload: error }));
};

export const getProduct = id => dispatch => {
  fetch(`http://light-it-04.tk/api/posters/${id}/`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      dispatch({ type: "GET_PRODUCT", payload: data });
    })
    .catch(error => dispatch({ type: "GET_PRODUCT_ERROR", payload: error }));
};
