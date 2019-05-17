import React from "react";
import { Wrapper } from "./ProductsStyle";

const ProductsList = ({ items, width }) => {
  return (
    <Wrapper width={width} className="productlist__wrapper">
      <div className="productlist__items items">{items}</div>
    </Wrapper>
  );
};

export default ProductsList;
