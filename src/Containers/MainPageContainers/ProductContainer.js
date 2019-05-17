import React from "react";
import { connect } from "react-redux";
import { getProduct } from "action-creator/product-action";

class ProductPageContainer extends React.Component {
  componentDidMount() {
    let { id, getProduct } = this.props;
    getProduct(id);
  }

  render() {
    return <div>test</div>;
  }
}

const mapStateToProps = ({ product }) => ({
  product
});

export default connect(
  mapStateToProps,
  { getProduct }
)(ProductPageContainer);
