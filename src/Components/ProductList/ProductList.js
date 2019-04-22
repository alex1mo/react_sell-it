import React, { Component } from "react";
import "./ProductList.css";
import Logo from "./Logo/Logo";
import Search from "./Search/Search";
import User from "./User/User";
import Item from "./Item/Item";
import data from "./json/data.json";

class ProductList extends Component {
  render() {
    return (
      <div className="productlist">
        <div className="productlist__header header">
          <Logo />
          <Search />
          <User />
        </div>
        <div className="productlist__items items">
          {data.items.map((e, i) => {
            return <Item key={i} image={e.image} title={e.title} />;
          })}
        </div>
      </div>
    );
  }
}

export default ProductList;
