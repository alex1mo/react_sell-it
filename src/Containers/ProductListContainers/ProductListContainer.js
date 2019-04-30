import React, { Component } from "react";
import ProductList from "../../Components/ProductList";
import { connect } from "react-redux";
import { fetchProducts } from "../../action"


class ProductListContainer extends Component {
  state = {
    productList: {
      width: null
    }
  };

  componentDidMount() {
    this.props.fetchProducts();
    this.getWidthForProductList();
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
      productList: { width }
    } = this.state;
    let { productList } = this.props
    let data = productList;

    return <ProductList products={data && data.hits} width={width} />;
  }
}

const mapStateToProps = state => ({
  productList: state.productList
})

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts())
})


export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer)
