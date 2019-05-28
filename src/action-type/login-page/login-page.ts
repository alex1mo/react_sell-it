import createType from "../create-type";

interface Obj1 {
  Type: (type: string) => string;
  requestType: (type: string) => Obj2;
}

interface Obj2 {
  request: string;
  success: string;
  failure: string;
}

const login: Obj1 = createType("login");

let signUp: Obj2 = login.requestType("REGISTRATION");
let signIn: Obj2 = login.requestType("AUTHENTICATION");
let userAuth: Obj2 = login.requestType("AUTHORIZATION");
let getProfile: Obj2 = login.requestType("GET_PROFILE");

export { signUp, signIn, userAuth, getProfile };
