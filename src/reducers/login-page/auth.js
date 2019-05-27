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
        ...state,
        isLoading: true
      };
    case userAuth.success:
      return { ...state, isLoading: false, data: action.payload };
    case userAuth.failure:
      return { isLoading: false, isLoadingError: true, data: action.payload };
    default:
      return state;
  }
}
