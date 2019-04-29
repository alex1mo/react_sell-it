import React, { Component } from "react";
import ProductList from "../../Components/ProductList";

class ProductListContainer extends Component {
  state = {
    data: null,
    productList: {
      width: null
    }
  };

  componentDidMount() {
    this.getProducts();
    this.setState({
      productList: {
        width: this.getWidthForProductList()
      }
    });
  }

  getProducts() {
    fetch(
      "https://pixabay.com/api/?key=10255087-ad858ae5e4adfc8ab26a27a9e&q=computer&category=businessi&image_type=photo&per_page=100"
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          data
        });
      })
      .catch(error => console.log(error));
  }

  getWidthForProductList = () => {
    let wrapper = document.querySelector(".productlist__wrapper");
    let html = document.querySelector("html");
    let fontSize = parseFloat(html.style.fontSize);
    let width = parseInt(getComputedStyle(wrapper).width) - 10;
    let int = Math.floor(width / (320 + 1.1 * fontSize * 2));
    return int * (320 + 1.1 * fontSize * 2);
  };

  render() {
    let {
      data,
      productList: { width }
    } = this.state;
    console.log(data);
    return <ProductList products={data && data.hits} width={width} />;
  }
}

export default ProductListContainer;
