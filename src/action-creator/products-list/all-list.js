import allList from "action-type/products-list/all-list";

export const fetchProducts = () => {
  return {
    type: allList.FETCH_PRODUCTS_REQUEST
  };
};
