import React from "react";
import { Details } from "./ProductsStyle";

import Item from "./Item";

import defaultImg from "materials/images/default_image.png";

const DetailsProduct = ({ item }) => {
  if (item && "pk" in item) {
    var { pk, theme, images: img } = item;

    return (
      <Details>
        <Item
          id={pk}
          title={theme}
          img={(img.length > 0 && img[0].file) || defaultImg}
        />
      </Details>
    );
  } else {
    return (
      <Details>
        <div>Loading...</div>
      </Details>
    );
  }
};

export default DetailsProduct;
