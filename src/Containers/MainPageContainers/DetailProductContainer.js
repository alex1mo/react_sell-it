import React from "react";
import { connect } from "react-redux";
import { getProduct } from "action-creator/main-page/main-page.js";

import DetailsProduct from "Components/MainPage/Products/DetailsProduct";

class DetailProductContainer extends React.Component {
  componentDidMount() {
    let { getProduct } = this.props;
    let { id } = this.props.match.params;
    getProduct(id);
  }

  render() {
    let { data } = this.props;
    return <DetailsProduct item={data} />;
  }
}

const mapStateToProps = ({ items: { data } }) => ({
  data
});

export default connect(
  mapStateToProps,
  { getProduct }
)(DetailProductContainer);
