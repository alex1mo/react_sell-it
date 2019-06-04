import React from "react";
import { Products } from "./ProductsStyle";

const ProductsList = ({ items, width }) => {
  return (
    <Products
      width={width}
      className="productlist__wrapper"
      style={{ alignItems: (items && "flex-start") || "center" }}
    >
      {(items && <div className="productlist__items items">{items}</div>) || (
        <div>Loading...</div>
      )}
    </Products>
  );
};

export default ProductsList;
