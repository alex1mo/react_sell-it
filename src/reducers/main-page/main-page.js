import { details, allList } from "action-type/main-page/main-page";

const initialState = {
  isLoading: null,
  isLoadingError: null,
  data: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case allList.request:
    case details.request:
      return {
        isLoading: false
      };
    case allList.success:
    case details.success:
      return { isLoading: true, isLoadingError: false, data: action.payload };
    case allList.failure:
    case details.failure:
      return { isLoading: true, isLoadingError: true, data: action.payload };
    default:
      return state;
  }
}
