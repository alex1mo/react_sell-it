import React from "react";
import DivItem from "./styleItem";
import eye from "../../../materials/images/fa-eye.png";
import test from "../../../materials/images/login-right-section-image.png";

const Item = props => {
  return (
    <DivItem className="productlist-items items__item item">
      <img
        className="items-item item__image"
        src={test}
        alt="Product preview"
      />

      <div className="items-item item__title title">
        <span className="item__title title__text">{"test"}</span>
        <img className="item-title title__eye" src={eye} alt="Eye icon" />
      </div>
    </DivItem>
  );
};

export default Item;
