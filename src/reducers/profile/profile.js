import { getProfile } from "action-type/login-page/login-page";

export const initialState = {
  isLoading: null,
  isLoadingError: null,
  data: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case getProfile.request:
      return {
        ...state,
        isLoading: true
      };
    case getProfile.success:
      return { ...state, isLoading: false, data: action.payload };
    case getProfile.failure:
      return { isLoading: false, isLoadingError: true, data: action.payload };
    default:
      return state;
  }
}
