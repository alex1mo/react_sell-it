import createType from "../create-type";

const login = createType("login");

let signUp = login.requestType("REGISTRATION");
let signIn = login.requestType("AUTHENTICATION");
let userAuth = login.requestType("AUTHORIZATION");

export { signUp, signIn, userAuth };
