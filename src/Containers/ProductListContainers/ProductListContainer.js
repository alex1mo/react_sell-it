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
    this.getWidthForProductList();
  }

  getProducts() {
    //http://light-it-04.tk/api/posters/
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

  componentWillUnmount() {
    document.body.onresize = null;
  }

  getWidthForProductList = () => {
    let result;
    let body = document.querySelector("body");
    let wrapper = document.querySelector(".productlist__wrapper");
    let getWidth = () => {
      let fontSize = parseFloat(getComputedStyle(body).fontSize);
      let widthWrapper = parseInt(getComputedStyle(wrapper).width) - 10;
      let int = Math.floor(widthWrapper / (fontSize * 1.1 * 2 + 320));
      console.log(int);
      result = (fontSize * 1.1 * 2 + 320) * int;
      this.setState({
        productList: {
          width: result
        }
      });
    };

    body.onresize = getWidth;
    return getWidth();
  };

  render() {
    let {
      data,
      productList: { width }
    } = this.state;
    return <ProductList products={data && data.hits} width={width} />;
  }
}

export default ProductListContainer;
