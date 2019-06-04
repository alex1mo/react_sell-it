import React, { useState } from "react";
import { connect } from "react-redux";

import DivSearch from "./styleSearch";
import icon from "materials/images/fa-search.png";

import { getProduct } from "action-creator/main-page/main-page.js";

const Search = ({ getProduct, items }) => {
  let [value, setValue] = useState(null);

  // console.log(items);

  return (
    <DivSearch icon={icon} className="productlist-header header__search search">
      <img src={icon} alt="search icon" />
      <input
        className="header-search search__input input"
        type="text"
        placeholder="Try find something"
        onInput={e => setValue(e.target.value)}
        onKeyDown={e => {
          if (e.keyCode === 13) {
            console.log(value);
          }
        }}
      />
    </DivSearch>
  );
};

const mapStateToProps = ({ items }) => ({
  items
});

export default connect(
  mapStateToProps,
  { getProduct }
)(Search);
