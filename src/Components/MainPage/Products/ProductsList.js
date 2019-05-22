import React from "react";
import { Products } from "./ProductsStyle";

const ProductsList = ({ items, width }) => {
  return (
    <Products width={width} className="productlist__wrapper">
      <div className="productlist__items items">{items}</div>
    </Products>
  );
};

export default ProductsList;
