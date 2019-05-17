import React from "react";
import Wrapper from "./styleIndex";
import Search from "../Common/Search/Search";
import logo from "materials/images/Sell_it_product.png";
import User from "./Header/User";
import Footer from "./Footer/Footer";
import ProductsListContainer from "../../Containers/MainPageContainers/ProductsListContainer";

const MainPage = () => {
  return (
    <Wrapper className="mainPage">
      <div className="mainPage__header header">
        <img src={logo} alt="Logo" className="mainPage-header header__logo" />
        <Search />
        <User />
      </div>
      <ProductsListContainer />
      <Footer />
    </Wrapper>
  );
};

export default MainPage;
