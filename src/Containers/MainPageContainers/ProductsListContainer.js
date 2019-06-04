import React, { Component } from "react";

import { connect } from "react-redux";

import { fetchProducts } from "action-creator/main-page/main-page";

import ProductsList from "Components/MainPage/Products/ProductsList";
import Item from "Components/MainPage/Products/Item";

import defaultImg from "materials/images/default_image.png";

class ProductListContainer extends Component {
  state = {
    productListWrapper: {
      width: null
    }
  };

  componentDidMount() {
    this.props.fetchProducts();
    this.getWidthForProductListWrapper();
  }

  componentWillUnmount() {
    document.body.onresize = null;
  }

  getWidthForProductListWrapper = () => {
    let result;
    let body = document.querySelector("body");
    let wrapper = document.querySelector(".productlist__wrapper");
    let getWidth = () => {
      let fontSize = parseFloat(getComputedStyle(body).fontSize);
      let widthWrapper = parseInt(getComputedStyle(wrapper).width) - 10;
      let int = Math.floor(widthWrapper / (fontSize * 1.1 * 2 + 320));
      result = (fontSize * 1.1 * 2 + 320) * int;
      this.setState({
        productListWrapper: {
          width: result
        }
      });
    };

    body.onresize = getWidth;
    return getWidth();
  };

  getArrItem = data => {
    if (data && data.length > 0) {
      return data.map(({ pk, images: img, theme }) => {
        return (
          <Item
            key={pk}
            id={pk}
            img={(img.length > 0 && img[0].file) || defaultImg}
            title={theme}
          />
        );
      });
    }
    return null;
  };

  render() {
    let {
      productListWrapper: { width }
    } = this.state;

    let { data, isLoading } = this.props.items;

    return (
      <ProductsList
        width={width}
        items={this.getArrItem(data)}
        status={isLoading}
      />
    );
  }
}

const mapStateToProps = ({ items }) => ({
  items
});

export default connect(
  mapStateToProps,
  { fetchProducts }
)(ProductListContainer);
