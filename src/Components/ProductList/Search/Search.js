import React, { Component } from "react";
import "./Search.css";

class Search extends Component {
  render() {
    return (
      <div className="productlist-header header__search search">
        <input
          className="header-search search__input input"
          type="text"
          placeholder="Try find somethink"
          id="forSearch"
        />
        <label htmlFor="forSearch" />
      </div>
    );
  }
}

export default Search;
