import { userAuth } from "action-type/login-page/login-page";

const initialState = {
  isLoading: null,
  isLoadingError: null,
  data: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case userAuth.request:
      return {
        isLoading: false
      };
    case userAuth.success:
      return { isLoading: true, isLoadingError: false, data: action.payload };
    case userAuth.failure:
      return { isLoading: true, isLoadingError: true, data: action.payload };
    default:
      return state;
  }
}
