import { getRequest } from ".";

export const getProduct = id => getRequest(`posters/${id}/`);

export const fetchProducts = () => getRequest("posters/");
