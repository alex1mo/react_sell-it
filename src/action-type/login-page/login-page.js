import createType from "../create-type";

const login = createType("login");

let signUp = login.requestType("REGISTRATION");
let signIn = login.requestType("AUTHENTICATION");
let userAuth = login.requestType("AUTHORIZATION");
let getProfile = login.requestType("GET_PROFILE");

export { signUp, signIn, userAuth, getProfile };
