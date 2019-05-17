import { details, allList } from "action-type/products-page/products-page";

export const getProduct = id => ({
  type: details.request,
  id
});

export const fetchProducts = () => {
  return {
    type: allList.request
  };
};
