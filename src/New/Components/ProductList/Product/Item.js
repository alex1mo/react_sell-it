import React from "react";
import DivItem from "./styleItem";
import eye from "../../../materials/images/fa-eye.png";

const Item = props => {
  let { title, url } = props;
  let defaultImg =
    "http://bldng.info/assets/default_image-a61228fe406c941a065163a232688948cb0e1186d2bc2b2727c073bb20728c67.png";
  return (
    <DivItem className="productlist-items items__item item">
      <img
        className="items-item item__image"
        src={url || defaultImg}
        alt="Product preview"
      />

      <div className="items-item item__title title">
        <span className="item__title title__text">{"title " + title}</span>
        <img className="item-title title__eye" src={eye} alt="Eye icon" />
      </div>
    </DivItem>
  );
};

export default Item;
