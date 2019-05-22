import { postRequest } from ".";

export const regRequest = data => postRequest("registration/", data);

export const authRequest = data => postRequest("login/", data);

export const authVerify = (data, headers) =>
  postRequest("token-verify/", data, headers);
