import React, { Component } from "react";
import "./User.css";
import Name from "./Name/Name";
import Exit from "./Exit/Exit";

class User extends Component {
  render() {
    return (
      <div className="productlist-header header__user user">
        <Name />
        <Exit />
      </div>
    );
  }
}

export default User;
