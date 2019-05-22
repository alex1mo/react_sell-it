import { details, allList } from "action-type/main-page/main-page";

export const getProduct = id => ({
  type: details.request,
  id
});

export const fetchProducts = () => {
  return {
    type: allList.request
  };
};
