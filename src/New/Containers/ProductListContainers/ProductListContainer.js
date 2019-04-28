import React, { Component } from "react";
import ProductList from "../../Components/ProductList";

class ProductListContainer extends Component {
  state = {
    productList: {
      width: null
    }
  };

  componentDidMount() {
    this.setState({
      productList: {
        width: this.getWidthForProductList()
      }
    });
  }

  getWidthForProductList = () => {
    let wrapper = document.querySelector(".productlist__wrapper");
    let html = document.querySelector("html");
    let fontSize = parseFloat(html.style.fontSize);
    let width = parseInt(getComputedStyle(wrapper).width);
    let int = Math.floor(width / (320 + 1.1 * fontSize * 2));
    return int * (320 + 1.1 * fontSize * 2);
  };

  render() {
    let width = this.state.productList.width;
    return <ProductList width={width} />;
  }
}

export default ProductListContainer;
