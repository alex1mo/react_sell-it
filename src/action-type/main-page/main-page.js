import { requestType } from "../create-type";

const main = requestType("main");

let allList = main("FETCH_PRODUCTS");
let details = main("GET_PRODUCT");

export { allList, details };
