import React, { Component } from "react";
import DivSearch from "./styleSearch";
import icon from "../../../materials/images/fa-search.png";

class Search extends Component {
  render() {
    return (
      <DivSearch
        icon={icon}
        className="productlist-header header__search search"
      >
        <img src={icon} alt="search icon" />
        <input
          className="header-search search__input input"
          type="text"
          placeholder="Try find something"
        />
      </DivSearch>
    );
  }
}

export default Search;
