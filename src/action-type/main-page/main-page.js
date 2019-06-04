import createType from "../create-type";

const main = createType("main");

let allList = main.requestType("FETCH_PRODUCTS");
let details = main.requestType("GET_PRODUCT");
let userMenu = main.Type("CHANGE_USER_MENU");
let searchProducts = main.requestType("SEARCH_PRODUCTS");

export { allList, details, searchProducts, userMenu };
