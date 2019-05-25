import { getProfile } from "action-type/login-page/login-page";

const initialState = {
  isLoading: null,
  isLoadingError: null,
  data: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case getProfile.request:
      return {
        isLoading: false
      };
    case getProfile.success:
      return { isLoading: true, isLoadingError: false, data: action.payload };
    case getProfile.failure:
      return { isLoading: true, isLoadingError: true, data: action.payload };
    default:
      return state;
  }
}
