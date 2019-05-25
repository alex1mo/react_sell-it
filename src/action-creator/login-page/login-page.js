import {
  signUp,
  signIn,
  userAuth,
  getProfile
} from "action-type/login-page/login-page";

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

export const profile = token => ({
  type: getProfile.request,
  token
});
