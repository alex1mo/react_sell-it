export const getProduct = id => dispatch => {
  fetch(`http://light-it-04.tk/api/posters/${id}/`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      dispatch({ type: "GET_PRODUCT", payload: data });
    })
    .catch(error => dispatch({ type: "GET_PRODUCT_ERROR", payload: error }));
};
