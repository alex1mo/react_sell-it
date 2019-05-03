import React from "react";
import Wrapper from "./styleIndex";
import Search from "../Common/Search/Search";
import logo from "materials/images/Sell_it_product.png";
import User from "./Header/User";
import Footer from "./Footer/Footer";

const ProductList = ({ width, items }) => {
  return (
    <Wrapper width={width} className="productlist">
      <div className="productlist__header header">
        <img
          src={logo}
          alt="Logo"
          className="productlist-header header__logo"
        />
        <Search />
        <User />
      </div>
      <div className="productlist__wrapper">
        <div className="productlist__items items">{items}</div>
      </div>
      <Footer />
    </Wrapper>
  );
};

export default ProductList;
