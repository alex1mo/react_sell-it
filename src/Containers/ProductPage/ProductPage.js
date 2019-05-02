import React from "react";
import { connect } from "react-redux";
import { getProduct } from "../../action";

class ProductPage extends React.Component {
  componentDidMount() {
    let { id, getProduct } = this.props;
    getProduct(id);
  }

  render() {
    console.log(this.props);

    return <div>test</div>;
  }
}

const mapStateToProps = state => ({
  product: state.product
});

export default connect(
  mapStateToProps,
  { getProduct }
)(ProductPage);
