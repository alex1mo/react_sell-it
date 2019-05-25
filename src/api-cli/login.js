import { postRequest, getRequest } from ".";

export const regRequest = data => postRequest("registration/", data);

export const authRequest = data => postRequest("login/", data);

export const authVerify = token => postRequest("token-verify/", token);

export const profileRequest = headers => {
  return getRequest("profile/", headers);
};
