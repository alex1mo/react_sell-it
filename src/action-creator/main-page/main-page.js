import {
  details,
  allList,
  userMenu,
  searchProducts as search
} from "action-type/main-page/main-page";

export const getProduct = id => ({
  type: details.request,
  id
});

export const fetchProducts = () => {
  return {
    type: allList.request
  };
};

export const changeUserMenu = () => {
  return {
    type: userMenu
  };
};

export const searchProducts = value => {
  return {
    type: search.request,
    value
  };
};
