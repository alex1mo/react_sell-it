import { requestType } from "../create-type";

let signUp = requestType("sign-up")("REGISTRATION");
let signIn = requestType("sign-in")("AUTHENTICATION");

export { signUp, signIn };
