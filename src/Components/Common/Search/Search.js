import React, { useState } from "react";
import { connect } from "react-redux";

import DivSearch from "./styleSearch";
import icon from "materials/images/fa-search.png";

import {
  searchProducts,
  fetchProducts
} from "action-creator/main-page/main-page.js";

const Search = ({ searchProducts, fetchProducts }) => {
  let [value, setValue] = useState(null);

  return (
    <DivSearch icon={icon} className="productlist-header header__search search">
      <img src={icon} alt="search icon" />
      <input
        className="header-search search__input input"
        type="text"
        placeholder="Try find something"
        onInput={e => setValue(e.target.value)}
        onKeyUp={e => {
          if (e.keyCode === 13) {
            value && value.length > 0 ? searchProducts(value) : fetchProducts();
          }
        }}
      />
    </DivSearch>
  );
};

export default connect(
  null,
  { searchProducts, fetchProducts }
)(Search);
