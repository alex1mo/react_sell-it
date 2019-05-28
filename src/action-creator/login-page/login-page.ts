import {
  signUp,
  signIn,
  userAuth,
  getProfile
} from "../../action-type/login-page/login-page";

interface argumentsReg {
  username: string;
  email: string;
  password1: string;
  password2: string;
}

interface returnReg {
  type: string;
  data: argumentsReg;
}

interface argumentsAuth {
  email: string;
  password: string;
}

interface returnAuth {
  type: string;
  data: argumentsAuth;
}

interface returnAuth2 {
  type: string;
  token: string | null;
}

export const registration = (data: argumentsReg): returnReg => {
  return {
    type: signUp.request,
    data
  };
};

export const authentication = (data: any): returnAuth => {
  return {
    type: signIn.request,
    data
  };
};

export const authorization = (token: string | null): returnAuth2 => ({
  type: userAuth.request,
  token
});

export const profile = (token: string | null): returnAuth2 => ({
  type: getProfile.request,
  token
});
