import React from "react";

import { Switch, Route } from "react-router-dom";

import Wrapper from "./styleIndex";

import Search from "../Common/Search/Search";
import User from "./Header/User";
import Footer from "./Footer/Footer";
import ProductsListContainer from "Containers/MainPageContainers/ProductsListContainer";
import DetailProductContainer from "Containers/MainPageContainers/DetailProductContainer";
import DetailsProfile from "./Profile/DetailsProfile";

import { Form } from "./Profile/ProfileStyle";

import logo from "materials/images/Sell_it_product.png";

const MainPage = ({ history }) => {
  return (
    <Wrapper className="mainPage">
      <div className="mainPage__header header">
        <img
          src={logo}
          alt="Home"
          className="mainPage-header header__logo"
          onClick={() => history.push("/main/products-list")}
        />
        <Search />
        <User />
      </div>
      <Switch>
        <Route path="/main/profile" component={DetailsProfile} />
        <Route path="/main/products-list/add" component={Form} />
        <Route
          path="/main/products-list/item::id"
          component={DetailProductContainer}
        />
        <Route path="/main/products-list" component={ProductsListContainer} />
      </Switch>
      <Footer />
    </Wrapper>
  );
};

export default MainPage;
