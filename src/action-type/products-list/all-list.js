import createType from "../create-type";

let allList = createType("allList");

const FETCH_PRODUCTS_REQUEST = allList("FETCH_PRODUCTS_REQUEST");
const FETCH_PRODUCTS_SUCCESS = allList("FETCH_PRODUCTS_SUCCESS");
const FETCH_PRODUCTS_FAILURE = allList("FETCH_PRODUCTS_FAILURE");

export default {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE
};
