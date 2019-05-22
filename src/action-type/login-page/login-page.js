import { requestType } from "../create-type";

const login = requestType("login");

let signUp = login("REGISTRATION");
let signIn = login("AUTHENTICATION");
let userAuth = login("AUTHORIZATION");

export { signUp, signIn, userAuth };
