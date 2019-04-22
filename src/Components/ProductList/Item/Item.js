import React, { Component } from "react";
import "./Item.css";
import eye_icon from "./material/fa-eye.png";

class Item extends Component {
  render() {
    let { image, title } = this.props;

    return (
      <div className="productlist-items items__item item">
        <img
          className="items-item item__image"
          src={require(__dirname + image)}
          alt="Product preview"
        />

        <div className="items-item item__title title">
          <span className="item__title title__text">{title}</span>
          <img
            className="item-title title__eye"
            src={eye_icon}
            alt="Eye icon"
          />
        </div>
      </div>
    );
  }
}

export default Item;
