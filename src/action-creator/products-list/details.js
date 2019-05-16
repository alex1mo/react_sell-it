import details from "action-type/products-list/details";

export const getProduct = id => ({
  type: details.request,
  id
});
