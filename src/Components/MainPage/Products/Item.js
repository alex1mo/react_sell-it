import React from "react";
import { Link } from "react-router-dom";

import { DivItem } from "./ProductsStyle";

import eye from "materials/images/fa-eye.png";

const Item = props => {
  let { title, img, id } = props;

  return (
    <Link to={`/main/products-list/item:${id}`}>
      <DivItem className="productlist-items items__item item">
        <img
          className="items-item item__image"
          src={img}
          alt="Product preview"
        />

        <div className="items-item item__title title">
          <span className="item__title title__text">{title}</span>
          <img className="item-title title__eye" src={eye} alt="Eye icon" />
        </div>
      </DivItem>
    </Link>
  );
};

export default Item;
