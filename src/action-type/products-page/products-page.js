import { requestType } from "../create-type";

let allList = requestType("all-list")("GET_PRODUCT");
let details = requestType("details")("FETCH_PRODUCTS");

export { allList, details };
