import React from "react";

import { Switch, Route } from "react-router-dom";

import Wrapper from "./styleIndex";

import Search from "../Common/Search/Search";
import User from "./Header/User";
import Footer from "./Footer/Footer";
import ProductsListContainer from "Containers/MainPageContainers/ProductsListContainer";
import DetailProductContainer from "Containers/MainPageContainers/DetailProductContainer";

import { Form, Profile } from "./Products/ProductsStyle";

import logo from "materials/images/Sell_it_product.png";

const MainPage = ({ location: { pathname } }) => {
  pathname.includes("products-list");
  return (
    <Wrapper className="mainPage">
      <div className="mainPage__header header">
        <img src={logo} alt="Logo" className="mainPage-header header__logo" />
        <Search />
        <User />
      </div>
      <Switch>
        <Route path="/main/profile" render={() => <Form>profile</Form>} />
        <Route
          path="/main/products-list/add"
          render={() => <Profile>form</Profile>}
        />
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
