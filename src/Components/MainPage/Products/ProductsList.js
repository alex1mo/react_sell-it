import React from "react";
import { Products } from "./ProductsStyle";

const ProductsList = ({ items, width, status }) => {
  let style = null;

  if (status) {
    style = { alignItems: "center" };
  } else {
    style = { alignItems: "flex-start" };
  }

  return (
    <Products width={width} className="productlist__wrapper" style={style}>
      {items && !status && (
        <div className="productlist__items items">{items}</div>
      )}
      {status && <div>Loading...</div>}
    </Products>
  );
};

export default ProductsList;
