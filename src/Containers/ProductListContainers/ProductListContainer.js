import React, { Component } from "react";
import ProductList from "../../Components/ProductList";
import { connect } from "react-redux";
import { fetchProducts } from "../../action";
import { Provider } from "react-redux";
import { store } from "../../App";
import Item from "../../Components/ProductList/Product/Item";

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

  returnArrItem = data =>
    data &&
    data.map(product => {
      return (
        <Item key={product.id} url={product.previewURL} title={product.id} />
      );
    });

  render() {
    let {
      productListWrapper: { width }
    } = this.state;

    let {
      productList: { hits: data }
    } = this.props;

    return (
      <Provider store={store}>
        <ProductList width={width} items={this.returnArrItem(data)} />
      </Provider>
    );
  }
}

const mapStateToProps = state => ({
  productList: state.productList
});

export default connect(
  mapStateToProps,
  { fetchProducts }
)(ProductListContainer);
