import { signUp, signIn } from "action-type/login-page/login-page";

const initialState = {
  isLoading: true,
  isLoadingError: null,
  data: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case signUp.request:
    case signIn.request:
      return {
        isLoading: false
      };
    case signUp.success:
    case signIn.success:
      return { isLoading: true, isLoadingError: false, data: action.payload };
    case signUp.failure:
    case signIn.failure:
      return { isLoading: true, isLoadingError: true, data: action.payload };
    default:
      return state;
  }
}
