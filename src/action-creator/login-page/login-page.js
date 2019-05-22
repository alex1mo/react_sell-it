import { signUp, signIn, userAuth } from "action-type/login-page/login-page";

export const registration = data => {
  return {
    type: signUp.request,
    data
  };
};

export const authentication = data => {
  return {
    type: signIn.request,
    data
  };
};

export const authorization = token => ({
  type: userAuth.request,
  token
});
