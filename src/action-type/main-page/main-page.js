import createType from "../create-type";

const main = createType("main");

let allList = main.requestType("FETCH_PRODUCTS");
let details = main.requestType("GET_PRODUCT");
let userMenu = main.Type("CHANGE_USER_MENU");

export { allList, details, userMenu };
